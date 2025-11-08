# Sanity CMS Setup Guide

## Table of Contents

- [Overview](#overview)
- [Creating a Sanity Project](#creating-a-sanity-project)
- [Project Configuration](#project-configuration)
- [Schema Overview](#schema-overview)
- [Content Management](#content-management)
- [GROQ Queries](#groq-queries)
- [Sanity Studio](#sanity-studio)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

This guide covers setting up and managing Sanity CMS for the SRCC website. Sanity is a headless CMS that provides a powerful content management interface and flexible query language (GROQ).

**What You'll Learn:**
- Creating a Sanity project
- Understanding the content schemas
- Managing content through Sanity Studio
- Writing GROQ queries
- Configuring API access

---

## Creating a Sanity Project

### Step 1: Create Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Click **"Get started for free"**
3. Sign up with:
   - GitHub account (recommended)
   - Google account
   - Email

### Step 2: Create New Project

**Via Sanity Manage:**

1. After logging in, click **"Create new project"**
2. Fill in project details:
   ```
   Project name: SRCC Website
   Use case: Website/Blog
   Schema: Clean (we'll add custom schemas)
   ```
3. Note your **Project ID** (e.g., `abc123xyz`)

**Via CLI (Alternative):**

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Create new project
sanity init

# Follow prompts:
# - Login with your account
# - Create new project
# - Use default dataset configuration
# - Select "Clean project with no predefined schemas"
```

### Step 3: Get Project Credentials

After project creation, note these values:

```
Project ID: abc123xyz (found in project settings)
Dataset: production (default)
```

Add to your `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## Project Configuration

### Sanity Client Setup

The project already includes Sanity client configuration:

```typescript
// sanity/lib/client.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-12-01',
  useCdn: false, // Set to false for fresh content
});
```

### CORS Configuration

To allow your Next.js app to access Sanity:

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Navigate to **Settings** → **API** → **CORS Origins**
4. Click **"Add CORS origin"**
5. Add origins:
   ```
   http://localhost:3000 (for development)
   https://shrirajayohamcc.com (for production)
   https://www.shrirajayohamcc.com (if using www)
   ```
6. Check **"Allow credentials"**

### API Tokens (Optional)

For draft mode or private content:

1. Go to **Settings** → **API** → **Tokens**
2. Click **"Add API token"**
3. Configure token:
   ```
   Name: SRCC Next.js App
   Permissions: Read
   ```
4. Copy the token
5. Add to `.env.local`:
   ```env
   SANITY_API_READ_TOKEN=your_token_here
   ```

---

## Schema Overview

The SRCC website uses the following content types:

### Document Schemas

#### 1. **Blog Post**

```typescript
{
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    'title',           // string
    'slug',            // slug
    'description',     // text
    'author',          // reference to team member
    'canonicalLink',   // url
    'mainImage',       // image
    'categories',      // array of references
    'publishedAt',     // datetime
    'featured',        // boolean
    'body',            // blockContent (rich text)
  ]
}
```

**Used For:** Blog articles and insights

---

#### 2. **Project**

```typescript
{
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    'title',                   // string
    'coverImage',              // image
    'slug',                    // slug
    'description',             // text
    'body',                    // blockContent
    'duration',                // string (e.g., "12 months")
    'status',                  // string (upcoming/ongoing/completed/sale/rent)
    'postStatus',              // string (visible/archived)
    'budget',                  // string (e.g., "₹50 Lakhs")
    'appreciationPrediction',  // string (e.g., "20% in 3 years")
    'contactNumber',           // string
    'locationURL',             // url (Google Maps)
    'address',                 // string
    'services',                // array of references
    'packages',                // array of references
    'testimonials',            // array of testimonial objects
    'imageGallery',            // array of images
  ]
}
```

**Used For:** Construction project showcases

**Status Options:**
- `upcoming` - Future projects
- `ongoing` - Active projects
- `completed` - Finished projects
- `sale` - Properties for sale
- `rent` - Properties for rent

---

#### 3. **Package**

```typescript
{
  name: 'package',
  title: 'Construction Package',
  type: 'document',
  fields: [
    'name',        // string
    'image',       // image
    'slug',        // slug
    'description', // text
    'features',    // blockContent
    'price',       // string (per sq. ft.)
    'services',    // array of references
  ]
}
```

**Used For:** Service packages (e.g., Basic, Standard, Premium)

---

#### 4. **Service**

```typescript
{
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    'name',        // string
    'icon',        // iconPicker (SVG selection)
    'description', // text
  ]
}
```

**Used For:** Individual services offered (Design, Construction, etc.)

---

#### 5. **Career**

```typescript
{
  name: 'career',
  title: 'Career Opportunity',
  type: 'document',
  fields: [
    'role',                  // reference to work role
    'position',              // reference to work position
    'slug',                  // slug
    'experience',            // string (e.g., "3-5 years")
    'benefits',              // array of strings
    'description',           // blockContent
    'location',              // string (Remote/Onsite/Hybrid)
    'applicationFormLink',   // url
  ]
}
```

**Used For:** Job openings and career opportunities

---

#### 6. **Team Member**

```typescript
{
  name: 'team',
  title: 'Team Member',
  type: 'document',
  fields: [
    'name',         // string
    'image',        // image
    'slug',         // slug
    'position',     // reference to work position
    'role',         // reference to work role
    'about',        // blockContent
    'degree',       // string
    'email',        // email
    'socialLinks',  // array of social links
  ]
}
```

**Used For:** Team member profiles

**Social Platforms:**
- LinkedIn
- Twitter
- Instagram
- GitHub
- Website

---

#### 7. **FAQ**

```typescript
{
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    'question',  // string
    'answer',    // text
    'order',     // number (for custom ordering)
  ]
}
```

**Used For:** Frequently asked questions

---

#### 8. **Testimonial**

```typescript
{
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    'name',     // string
    'content',  // text
    'rating',   // number (1-5)
    'image',    // image
  ]
}
```

**Used For:** Client reviews and feedback

---

#### 9. **Category**

```typescript
{
  name: 'category',
  title: 'Blog Category',
  type: 'document',
  fields: [
    'title',        // string
    'slug',         // slug
    'description',  // text
  ]
}
```

**Used For:** Organizing blog posts

---

#### 10. **CSR & Event**

```typescript
{
  name: 'csrAndEvent',
  title: 'CSR & Event',
  type: 'document',
  fields: [
    'title',         // string
    'description',   // text
    'image',         // image
    'dateOccurred',  // datetime
  ]
}
```

**Used For:** Corporate social responsibility initiatives

---

#### 11. **Impact**

```typescript
{
  name: 'impact',
  title: 'Impact Statistic',
  type: 'document',
  fields: [
    'count',  // number
    'title',  // string (e.g., "Projects Completed")
  ]
}
```

**Used For:** Company statistics and achievements

---

### Object Schemas

#### Block Content (Rich Text)

```typescript
{
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            fields: [
              { name: 'href', type: 'url' },
            ],
          },
        ],
      },
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
```

---

## Content Management

### Accessing Sanity Studio

#### Embedded Studio (Recommended)

Access the CMS directly in your Next.js app:

```
http://localhost:3000/studio (development)
https://shrirajayohamcc.com/studio (production)
```

#### Standalone Studio

Or use the Sanity Manage dashboard:

```
https://www.sanity.io/manage/personal/project/YOUR_PROJECT_ID
```

### Creating Content

#### Adding a Blog Post

1. Go to `/studio`
2. Click **"+ New document"** → **"Blog Post"**
3. Fill in fields:
   ```
   Title: "Top 10 Home Design Trends in 2024"
   Slug: Auto-generate from title
   Description: Brief summary
   Author: Select from team members
   Main Image: Upload cover image
   Categories: Select relevant categories
   Published At: Set date/time
   Featured: Toggle if homepage feature
   Body: Write rich text content
   ```
4. Click **"Publish"**

#### Adding a Project

1. **+ New document** → **"Project"**
2. Fill in details:
   ```
   Title: "Luxury Villa in Chennai"
   Cover Image: Upload project photo
   Slug: Auto-generate
   Description: Project overview
   Status: Select (upcoming/ongoing/completed/sale/rent)
   Budget: "₹1.5 Crore"
   Duration: "18 months"
   Location URL: Google Maps link
   Services: Select relevant services
   Packages: Select applicable packages
   Image Gallery: Upload multiple images
   Body: Detailed description
   ```
3. **Publish**

### Managing Content

**Edit Content:**
- Navigate to document
- Click to edit
- Make changes
- Publish updates

**Archive Content:**
- Set `postStatus` to "archived"
- Or delete document entirely

**Reorder Content:**
- FAQs: Use `order` field
- Other content: Sorted by date or custom queries

---

## GROQ Queries

### What is GROQ?

GROQ (Graph-Relational Object Queries) is Sanity's query language.

### Basic Query Structure

```groq
*[_type == "post"] {
  _id,
  title,
  slug,
  description
}
```

### Query Examples

#### Get All Projects

```groq
*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  coverImage,
  description,
  status
}
```

#### Get Featured Blog Posts

```groq
*[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
  title,
  slug,
  description,
  mainImage,
  publishedAt
}
```

#### Get Project with Related Data

```groq
*[_type == "project" && slug.current == $slug][0] {
  title,
  description,
  body,
  services[]-> {
    name,
    icon,
    description
  },
  packages[]-> {
    name,
    price
  }
}
```

### Query Filters

```groq
*[_type == "project" && status == "completed"] # Filter by status
*[_type == "post" && publishedAt > "2024-01-01"] # Date filter
*[_type == "team" && role._ref == $roleId] # Reference filter
```

### Query Projections

```groq
{
  "id": _id,
  "heading": title,
  "url": slug.current,
  "image": mainImage.asset->url
}
```

---

## Sanity Studio

### Studio Configuration

The studio is configured in `sanity.config.ts`:

```typescript
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemas } from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'SRCC Website',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [
    deskTool(),
    visionTool(),
    iconPicker(), // For service icons
  ],
  schema: {
    types: schemas,
  },
});
```

### Studio Features

**Desk Tool:**
- Main content editing interface
- Organized by document type

**Vision Tool:**
- GROQ query playground
- Test queries in real-time

**Icon Picker:**
- Select SVG icons for services
- Custom icon library

---

## Best Practices

### Content Structure

1. **Use meaningful slugs:**
   ```
   Good: "luxury-villa-chennai"
   Bad: "project-1"
   ```

2. **Fill all required fields:**
   - Improves SEO
   - Better user experience

3. **Optimize images:**
   - Use appropriate dimensions
   - Compress before upload
   - Add alt text

4. **Use categories:**
   - Organize blog posts
   - Enable filtering

### Query Optimization

1. **Limit results:**
   ```groq
   *[_type == "post"][0...10]  # Get first 10
   ```

2. **Project only needed fields:**
   ```groq
   {
     title,
     slug,
     description
   }
   ```

3. **Use references wisely:**
   ```groq
   services[]->  # Dereference
   ```

---

## Troubleshooting

### Problem: Can't Access Studio

**Solution:**
- Check `/studio` route exists
- Verify Sanity credentials in `.env.local`
- Clear browser cache
- Check console for errors

### Problem: Changes Not Appearing

**Solution:**
- Ensure content is **published** (not draft)
- Check ISR revalidation (60 seconds)
- Force revalidation or clear cache
- Verify correct dataset (`production` vs `development`)

### Problem: CORS Error

**Solution:**
- Add your domain to CORS origins in Sanity
- Include `http://localhost:3000` for development
- Allow credentials

### Problem: Images Not Loading

**Solution:**
- Verify image is uploaded and published
- Check `@sanity/image-url` configuration
- Ensure image URL is correct in query
- Check Next.js `next.config.js` allows `cdn.sanity.io`

---

## Support

For Sanity-related questions:

- **Sanity Documentation:** [sanity.io/docs](https://www.sanity.io/docs)
- **GROQ Reference:** [sanity.io/docs/groq](https://www.sanity.io/docs/groq)
- **Sanity Slack:** [slack.sanity.io](https://slack.sanity.io/)
- **GitHub Issues:** [Report issues](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues)

---

**Last Updated:** November 2024

**Next Steps:**
- Create test content in all schemas
- Familiarize yourself with GROQ queries
- Test content publishing workflow
- Set up production dataset
