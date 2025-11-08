# Architecture Documentation

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Architecture Patterns](#architecture-patterns)
- [Data Flow](#data-flow)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Routing & Navigation](#routing--navigation)
- [Content Management System](#content-management-system)
- [API Design](#api-design)
- [Performance Optimizations](#performance-optimizations)
- [Security Architecture](#security-architecture)
- [Deployment Architecture](#deployment-architecture)
- [Design Decisions](#design-decisions)

---

## Overview

The Shri Rajayoham Construction Company website is built as a modern, full-stack web application using **Next.js 14 App Router** with **Sanity CMS** for content management. The architecture follows a server-first approach, leveraging React Server Components for optimal performance while maintaining interactivity where needed with Client Components.

**Key Architectural Principles:**
- **Server-First Rendering** - Maximize use of React Server Components
- **Type Safety** - Comprehensive TypeScript coverage
- **Performance** - ISR, progressive image loading, and optimized bundles
- **Scalability** - Modular component structure and clean separation of concerns
- **Security** - Input validation, rate limiting, and environment isolation

---

## Technology Stack

### Frontend
- **Framework:** Next.js 14.0.4 (App Router)
- **UI Library:** React 18.2.0
- **Language:** TypeScript 5.3.3
- **Styling:** Tailwind CSS 3.4.0
- **Component Library:** Radix UI + shadcn/ui
- **Animations:** Framer Motion 11.0.3
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js (Next.js API Routes)
- **Email:** Nodemailer 6.9.8
- **Caching:** node-cache 5.1.2 (in-memory)

### CMS
- **Headless CMS:** Sanity 3.23.4
- **Query Language:** GROQ
- **Image Handling:** @sanity/image-url

### Forms & Validation
- **Form Library:** React Hook Form 7.49.2
- **Validation:** Zod 3.22.4

### Development Tools
- **Package Manager:** pnpm
- **Linting:** ESLint
- **Git Hooks:** Husky
- **Type Checking:** TypeScript

### Deployment
- **Platform:** Vercel (recommended)
- **Analytics:** Google Analytics (GA4)
- **Monitoring:** Vercel Speed Insights

---

## Project Structure

```
Shri-Rajayoham-Construction/
│
├── app/                          # Next.js App Router
│   ├── (main)/                  # Main route group with shared layout
│   │   ├── layout.tsx           # Shared layout (Navbar + Footer)
│   │   ├── page.tsx             # Homepage
│   │   ├── about/               # About page
│   │   ├── blogs/               # Blog listing & [slug] dynamic routes
│   │   ├── careers/             # Careers listing & [slug] dynamic routes
│   │   ├── contact/             # Contact page with 5 forms
│   │   ├── packages/            # Package listing & [slug] dynamic routes
│   │   ├── privacy/             # Privacy policy
│   │   ├── projects/            # Project listing & [slug] dynamic routes
│   │   └── terms/               # Terms & conditions
│   ├── api/                     # API Routes
│   │   └── contact/[task]/      # Contact form submission handlers
│   ├── studio/[[...index]]/     # Sanity Studio embedded route
│   ├── layout.tsx               # Root layout (HTML, providers)
│   ├── globals.css              # Global styles
│   ├── robots.ts                # Robots.txt generator
│   └── sitemap.ts               # Dynamic sitemap generator
│
├── components/                   # React Components
│   ├── about/                   # About page specific components
│   ├── blogs/                   # Blog components (cards, headers, etc.)
│   ├── cards/                   # Reusable card components
│   ├── careers/                 # Career components
│   ├── contact/                 # Contact form components (5 specialized forms)
│   ├── home/                    # Homepage sections
│   ├── icons/                   # Custom icon components
│   ├── packages/                # Package components
│   ├── projects/                # Project components
│   ├── reusable/                # Shared utility components
│   │   ├── Counter.tsx          # Animated counter
│   │   ├── GoogleAnalytics.tsx  # GA4 integration
│   │   ├── QueryDialog.tsx      # Engagement modal
│   │   ├── ReadTime.tsx         # Blog read time calculator
│   │   ├── SanityImage.tsx      # Optimized Sanity images
│   │   ├── SocialShare.tsx      # Social sharing
│   │   ├── SVGFromString.tsx    # Dynamic SVG renderer
│   │   └── WhatsAppCTA.tsx      # Floating WhatsApp button
│   └── ui/                      # shadcn/ui components
│
├── layouts/                      # Layout Components
│   ├── Footer.tsx               # Site footer
│   ├── Navbar.tsx               # Main navigation
│   ├── QuickLinks.tsx           # Top quick links bar
│   └── SheetNav.tsx             # Mobile navigation drawer
│
├── sanity/                       # Sanity CMS Configuration
│   ├── lib/                     # Sanity utilities
│   │   ├── client.ts            # Sanity client setup
│   │   └── sanityFetch.ts       # Fetch wrapper with caching
│   ├── queries/                 # GROQ Queries
│   │   ├── blog.ts              # Blog post queries
│   │   ├── career.ts            # Career queries
│   │   ├── faq.ts               # FAQ queries
│   │   ├── package.ts           # Package queries
│   │   ├── project.ts           # Project queries
│   │   ├── service.ts           # Service queries
│   │   └── team.ts              # Team member queries
│   └── schemas/                 # Content Schemas
│       ├── index.ts             # Schema registry
│       ├── blockContent.ts      # Rich text schema
│       ├── blog.ts              # Blog post schema
│       ├── career.ts            # Career schema
│       ├── csr-and-event.ts     # CSR/Event schema
│       ├── faq.ts               # FAQ schema
│       ├── impact.ts            # Impact statistics schema
│       ├── package.ts           # Package schema
│       ├── project.ts           # Project schema
│       ├── service.ts           # Service schema
│       ├── team.ts              # Team member schema
│       └── testimonial.ts       # Testimonial schema
│
├── lib/                          # Utility Functions
│   ├── utils.ts                 # cn(), dateFormatter(), form schema builder
│   ├── helper.ts                # generateDefaultMetadata()
│   ├── apiError.ts              # Custom ApiError class
│   └── gtag.ts                  # Google Analytics helpers
│
├── services/                     # API Service Functions
│   └── contact.ts               # submitContactFormDetails()
│
├── constants/                    # Static Data & Configuration
│   ├── navigation.ts            # NAVBAR_NAVIGATION, FOOTER_NAVIGATION
│   ├── srcc.ts                  # Company constants (email, phone, socials)
│   └── legal.ts                 # Terms & conditions, privacy policy data
│
├── hooks/                        # Custom React Hooks
│   └── use-progressive-image.ts # Progressive image loading hook
│
├── context/                      # React Context Providers
│   └── QueryModalContext.tsx    # Modal state management
│
├── @types/                       # TypeScript Type Definitions
│   └── index.d.ts               # All type definitions
│
├── public/                       # Static Assets
│   └── assets/                  # Images, logos, etc.
│       ├── logo.png
│       ├── about/
│       ├── fallback/
│       ├── hero/
│       ├── locations/
│       ├── materials/
│       └── projects/
│
├── docs/                         # Documentation
│   ├── ARCHITECTURE.md          # This file
│   ├── API.md                   # API documentation
│   ├── DEPLOYMENT.md            # Deployment guide
│   └── SANITY_SETUP.md          # Sanity CMS setup
│
└── .github/                      # GitHub Configuration
    ├── ISSUE_TEMPLATE/          # Issue templates
    └── pull_request_template.md # PR template
```

---

## Architecture Patterns

### 1. App Router Architecture

We use Next.js 14 App Router with the following patterns:

```
app/
├── layout.tsx                    # Root layout (HTML wrapper)
├── (main)/                       # Route group
│   ├── layout.tsx                # Shared layout (Navbar + Footer)
│   └── [feature]/
│       ├── page.tsx              # Page component (required)
│       ├── layout.tsx            # Feature-specific layout (optional)
│       ├── loading.tsx           # Loading UI (optional)
│       └── error.tsx             # Error boundary (optional)
└── api/
    └── [endpoint]/
        └── route.ts              # API route handler
```

**Benefits:**
- Automatic code splitting per route
- Nested layouts with shared UI
- Streaming and suspense support
- Simplified data fetching

### 2. Server-First Strategy

**Default: Server Components**
```tsx
// Most components are Server Components by default
export default async function ProjectsPage() {
  const projects = await sanityFetch({ query: PROJECT.getAll });
  return <div>{/* Render on server */}</div>;
}
```

**Client Components Only When Needed:**
```tsx
'use client';

// Use client components for:
// - Interactivity (onClick, onChange, etc.)
// - Hooks (useState, useEffect, etc.)
// - Browser APIs
// - Context Providers
export default function ContactForm() {
  const [formData, setFormData] = useState({});
  // ...
}
```

### 3. Component Composition

```tsx
// Page (Server Component)
export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params.slug);

  return (
    <>
      <ProjectHeader project={project} />      {/* Server */}
      <ProjectGallery images={project.images} /> {/* Client */}
      <ProjectTestimonials data={project.testimonials} /> {/* Server */}
    </>
  );
}
```

### 4. Data Fetching Pattern

```tsx
// Centralized GROQ queries
export const PROJECT = {
  getAll: groq`*[_type == "project"]{ ... }`,
  getIndividual: groq`*[_type == "project" && slug.current == $slug][0]{ ... }`
};

// Fetch with caching and revalidation
const project = await sanityFetch({
  query: PROJECT.getIndividual,
  params: { slug },
  tags: ['project'], // For on-demand revalidation
});
```

---

## Data Flow

### 1. Content Management Flow

```
Sanity Studio (/studio)
    ↓ (Content Editor creates/updates)
Sanity API (cdn.sanity.io)
    ↓ (GROQ query via sanityFetch)
Server Component
    ↓ (Renders with data)
HTML sent to Client
    ↓ (Hydration if interactive)
Client Component (if needed)
```

### 2. Form Submission Flow

```
User fills form
    ↓
Client-side validation (Zod)
    ↓
Submit to API route (/api/contact/[task])
    ↓
Rate limiting check (NodeCache)
    ↓ (if allowed)
Server-side validation (Zod)
    ↓
Send email (Nodemailer)
    ↓
Return success/error response
    ↓
Show toast notification (Sonner)
```

### 3. Image Optimization Flow

```
Image in Sanity CMS
    ↓
GROQ query fetches image reference
    ↓
SanityImage component
    ↓
@sanity/image-url generates optimized URL
    ↓
Next.js Image component
    ↓ (with progressive loading hook)
Optimized, lazy-loaded image
```

---

## Component Architecture

### Component Hierarchy

```
Root Layout
├── QueryModalProvider (Context)
├── GoogleAnalytics
└── Main Layout
    ├── QuickLinks
    ├── Navbar
    ├── Page Content
    │   ├── Server Components (default)
    │   └── Client Components ('use client')
    ├── Footer
    └── WhatsAppCTA
```

### Component Types

1. **Server Components** (default)
   - Page components
   - Layout components
   - Data fetching components
   - Static content components

2. **Client Components** (`'use client'`)
   - Forms (all contact forms)
   - Interactive UI (carousel, counter, modals)
   - Context providers
   - Browser API usage

3. **Hybrid Pattern**
   ```tsx
   // Server Component
   export default async function ProjectPage() {
     const data = await fetchData(); // Server-side data fetching
     return <InteractiveComponent data={data} />; // Pass to client
   }

   // Client Component
   'use client';
   export function InteractiveComponent({ data }) {
     const [state, setState] = useState(data);
     // Client-side interactivity
   }
   ```

---

## State Management

### 1. Server State

**Fetched via Sanity CMS:**
- Projects, blogs, packages, careers, team members, etc.
- Cached and revalidated via ISR (60 seconds)
- No client-side state management needed

### 2. Client State

**Managed locally with React hooks:**
- Form state: React Hook Form
- Modal state: React Context (QueryModalContext)
- UI state: useState, useEffect

**No global state management library** (Redux, Zustand) - not needed due to server-first architecture.

### 3. Context Usage

```tsx
// contexts/QueryModalContext.tsx
'use client';

export const QueryModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show modal after 10 seconds on first visit
    const timer = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryModalContext.Provider value={{ open, setOpen }}>
      {children}
    </QueryModalContext.Provider>
  );
};
```

---

## Routing & Navigation

### Dynamic Routes

```
/blogs/[slug]      → Blog post detail
/projects/[slug]   → Project detail
/packages/[slug]   → Package detail
/careers/[slug]    → Job detail
```

**Implementation:**
```tsx
// app/(main)/projects/[slug]/page.tsx
export async function generateStaticParams() {
  const paths = await sanityFetch({ query: PROJECT.getPaths });
  return paths; // [{ slug: 'project-1' }, { slug: 'project-2' }, ...]
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await sanityFetch({
    query: PROJECT.getIndividual,
    params: { slug: params.slug },
  });

  if (!project) notFound();
  return <ProjectContent project={project} />;
}
```

### Navigation Constants

```typescript
// constants/navigation.ts
export const NAVBAR_NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  // ...
];
```

---

## Content Management System

### Sanity Architecture

```
Sanity Studio (React app at /studio)
    ↓
Sanity API (GraphQL/GROQ)
    ↓
Next.js App (via @sanity/client)
```

### Schema Design

**Content Types:**
- **Documents:** Projects, Blog Posts, Packages, Careers, Team Members
- **Objects:** Testimonials, Services, FAQs, Impact Stats
- **Rich Text:** Block Content with custom serializers

**Example Schema:**
```typescript
export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'status', type: 'string', options: { list: statusOptions } }),
    defineField({ name: 'body', type: 'blockContent' }),
    // ...
  ],
});
```

### Query Strategy

**Centralized Queries:**
```typescript
// sanity/queries/project.ts
export const PROJECT = {
  getAll: groq`*[_type == "project"] | order(_createdAt desc) { ... }`,
  getAllCompleted: groq`*[_type == "project" && status == "completed"] { ... }`,
  getIndividual: groq`*[_type == "project" && slug.current == $slug][0] { ... }`,
  getPaths: groq`*[_type == "project"][]{"params": {"slug": slug.current}}`,
};
```

---

## API Design

### Endpoint Structure

```
POST /api/contact/enquiry              # General enquiry form
POST /api/contact/investor-relations   # Investor form
POST /api/contact/supplier-vendor      # Supplier form
POST /api/contact/services-required    # Services form
POST /api/contact/careers              # Careers form
```

### Request/Response Format

**Request:**
```typescript
{
  name: string;
  email: string;
  mobile: string;
  pincode: string;
  message: string;
}
```

**Success Response:**
```typescript
{
  success: true,
  message: "Form submitted successfully"
}
```

**Error Response:**
```typescript
{
  success: false,
  message: "Error description",
  blockedUntil?: number // For rate limit errors
}
```

### Rate Limiting Implementation

```typescript
// In-memory cache
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });

// Key: `${ip}-${task}`
// Value: { count: number, blockedUntil?: number }

// Logic:
// 1. Check if IP is blocked for this task
// 2. If blocked, return error with blockedUntil timestamp
// 3. If not blocked, check submission count
// 4. If count >= 3, block for 24 hours
// 5. If count < 3, increment and process
```

---

## Performance Optimizations

### 1. Incremental Static Regeneration (ISR)

```tsx
// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Page() {
  const data = await sanityFetch({ query: PROJECT.getAll });
  // ...
}
```

### 2. Image Optimization

```tsx
// Progressive loading with custom hook
const loaded = useProgressiveImage(imageUrl);

<Image
  src={loaded || fallbackImage}
  alt="..."
  width={800}
  height={600}
  loading="lazy"
  className={loaded ? 'opacity-100' : 'opacity-0'}
/>
```

### 3. Code Splitting

- **Automatic route-based splitting** via Next.js
- **Dynamic imports** for heavy components:
  ```tsx
  const HeavyComponent = dynamic(() => import('./HeavyComponent'));
  ```

### 4. Font Optimization

```tsx
// app/layout.tsx
import { Palanquin } from 'next/font/google';

const palanquin = Palanquin({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
```

### 5. Caching Strategy

- **Sanity CDN:** Disabled (`useCdn: false`) for fresh content
- **ISR:** 60-second revalidation
- **Static Assets:** Cached via Vercel CDN
- **Rate Limiting:** In-memory cache (NodeCache)

---

## Security Architecture

### 1. Input Validation

**Client-side (pre-submission):**
```typescript
const schema = z.object({
  email: z.string().email(),
  mobile: z.string().regex(/^(?:\+91)?\s*[6789]\d{9}$/),
  pincode: z.string().regex(/^[1-9][0-9]{5}$/),
});
```

**Server-side (API route):**
```typescript
const validatedData = schema.parse(body);
```

### 2. Environment Isolation

```
Development: .env.local (not committed)
Production: Vercel environment variables
Staging: Separate environment on Vercel
```

### 3. API Security

- **TypeScript:** Type safety prevents many errors
- **Zod:** Runtime validation
- **Error Handling:** No sensitive data in errors
- **Rate Limiting:** Per-IP, per-form-type

### 4. Content Security

- **Sanity:** Managed CMS with authentication
- **XSS Protection:** React's built-in escaping
- **HTTPS Only:** Enforced on production

---

## Deployment Architecture

### Vercel Deployment

```
Git Push → GitHub
    ↓
Vercel Build
    ├── Build Next.js app
    ├── Generate static pages
    ├── Create serverless functions (API routes)
    └── Optimize assets
    ↓
Deploy to Edge Network
    ├── Static assets → CDN
    ├── Pages → Edge functions
    └── API routes → Serverless functions
```

### Environment Variables

**Required:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NODEMAILER_EMAIL`
- `NODEMAILER_PASSWORD`

**Optional:**
- `SANITY_API_READ_TOKEN` (for draft mode)

---

## Design Decisions

### Why Next.js App Router?

- **Server Components:** Reduced client JavaScript
- **Streaming:** Faster Time to First Byte (TTFB)
- **Built-in optimizations:** Image, font, code splitting
- **File-based routing:** Intuitive project structure

### Why Sanity CMS?

- **Real-time editing:** Live content updates
- **Structured content:** GROQ queries for flexible data fetching
- **Portable Text:** Rich text editing with custom serializers
- **Developer experience:** Excellent TypeScript support

### Why TypeScript?

- **Type safety:** Catch errors at compile time
- **IntelliSense:** Better developer experience
- **Refactoring:** Safer code changes
- **Documentation:** Types serve as inline documentation

### Why Tailwind CSS?

- **Utility-first:** Rapid development
- **Consistency:** Design system baked in
- **Performance:** Purges unused CSS
- **Responsive:** Mobile-first approach

### Why Zod?

- **Runtime validation:** TypeScript types + runtime checks
- **Error handling:** Detailed error messages
- **Type inference:** Infer TypeScript types from schemas
- **Composition:** Reusable schema building blocks

### Why pnpm?

- **Disk efficiency:** Shared dependency storage
- **Speed:** Faster than npm/yarn
- **Strict:** Better dependency management
- **Monorepo support:** (if needed in the future)

---

## Future Architectural Considerations

### Scalability

- **Database:** Consider moving rate limiting to Redis for persistence
- **CDN:** Already handled by Vercel
- **Caching:** Could add Redis for advanced caching
- **Search:** Could integrate Algolia for advanced search

### Monitoring

- **Error Tracking:** Consider Sentry integration
- **Performance:** Already using Vercel Speed Insights
- **Uptime:** Consider UptimeRobot or similar

### Testing

- **Unit Tests:** Jest + Testing Library (future)
- **E2E Tests:** Playwright or Cypress (future)
- **Visual Regression:** Percy or Chromatic (future)

---

**Last Updated:** November 2024

For questions about the architecture, please refer to the [CONTRIBUTING.md](../CONTRIBUTING.md) guide or open an issue on GitHub.
