# Contributing to Shri Rajayoham Construction Company Website

Thank you for your interest in contributing to the SRCC Website! This guide will help you get started and ensure a smooth contribution process.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setting Up Your Development Environment](#setting-up-your-development-environment)
  - [Environment Variables](#environment-variables)
- [Development Workflow](#development-workflow)
  - [Branching Strategy](#branching-strategy)
  - [Making Changes](#making-changes)
  - [Commit Guidelines](#commit-guidelines)
  - [Testing Your Changes](#testing-your-changes)
  - [Submitting a Pull Request](#submitting-a-pull-request)
- [Coding Standards](#coding-standards)
  - [TypeScript Guidelines](#typescript-guidelines)
  - [React Best Practices](#react-best-practices)
  - [CSS/Tailwind Guidelines](#csstailwind-guidelines)
  - [File Naming Conventions](#file-naming-conventions)
- [Project-Specific Guidelines](#project-specific-guidelines)
  - [Working with Sanity CMS](#working-with-sanity-cms)
  - [Adding New Components](#adding-new-components)
  - [Creating API Routes](#creating-api-routes)
  - [Adding New Pages](#adding-new-pages)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)
- [Questions and Support](#questions-and-support)

---

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before contributing.

**In summary:**
- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Respect differing viewpoints
- Report unacceptable behavior

---

## Getting Started

### Prerequisites

Before contributing, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **pnpm** (v8.0.0 or higher)
  ```bash
  npm install -g pnpm
  ```
- **Git** for version control
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))

### Setting Up Your Development Environment

1. **Fork the repository**

   Click the "Fork" button on the [GitHub repository](https://github.com/kunalkeshan/Shri-Rajayoham-Construction) to create your own copy.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Shri-Rajayoham-Construction.git
   cd Shri-Rajayoham-Construction
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/kunalkeshan/Shri-Rajayoham-Construction.git
   ```

4. **Install dependencies**
   ```bash
   pnpm install
   ```

5. **Set up environment variables**

   Copy the sample environment file:
   ```bash
   cp .env.sample .env.local
   ```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Email Configuration (for contact forms)
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_app_specific_password

# Optional: Sanity API Token (for draft mode)
SANITY_API_READ_TOKEN=your_sanity_read_token
```

#### Setting Up Sanity CMS

To contribute effectively, you'll need access to Sanity CMS:

1. Visit [sanity.io](https://www.sanity.io/) and sign up for a free account
2. Create a new project for testing purposes
3. Note your **Project ID** and **Dataset name**
4. Add these to your `.env.local` file

**For detailed Sanity setup instructions, see [docs/SANITY_SETUP.md](./docs/SANITY_SETUP.md).**

#### Setting Up Nodemailer with Gmail

To test contact form functionality:

1. Go to your [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **Security** → **App passwords**
4. Generate a new app password for "Mail" / "Other"
5. Use your Gmail address as `NODEMAILER_EMAIL`
6. Use the generated 16-character password as `NODEMAILER_PASSWORD`

**Note:** For security reasons, never commit your `.env.local` file!

---

## Development Workflow

### Branching Strategy

We follow a simplified Git workflow:

- **`main`** - Production-ready code
- **Feature branches** - For new features or bug fixes

**Branch naming conventions:**
- `feature/your-feature-name` - For new features
- `fix/bug-description` - For bug fixes
- `docs/update-description` - For documentation updates
- `refactor/component-name` - For code refactoring
- `chore/task-description` - For maintenance tasks

**Example:**
```bash
git checkout -b feature/add-dark-mode-toggle
```

### Making Changes

1. **Sync your fork with upstream**
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

2. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow the [coding standards](#coding-standards)
   - Add comments where necessary
   - Update documentation if needed

4. **Test your changes locally**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) and verify your changes.

5. **Run linting**
   ```bash
   pnpm lint
   ```
   Fix any linting errors before committing.

### Commit Guidelines

We follow **Conventional Commits** for clear and consistent commit messages:

**Format:**
```
<type>(<scope>): <subject>

<body> (optional)

<footer> (optional)
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

**Examples:**
```bash
# Good commits
git commit -m "feat(contact): add investor relations form"
git commit -m "fix(carousel): resolve image loading issue on mobile"
git commit -m "docs(readme): update installation instructions"
git commit -m "refactor(api): extract rate limiting logic to utility"

# Bad commits (avoid these)
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

**Commit message guidelines:**
- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Limit first line to 72 characters
- Reference issues when applicable: `fix(form): resolve validation issue (#123)`

### Testing Your Changes

Before submitting a pull request:

1. **Manual testing**
   - Test your changes in development mode (`pnpm dev`)
   - Check responsive design on different screen sizes
   - Verify functionality in different browsers (Chrome, Firefox, Safari)

2. **Build testing**
   ```bash
   pnpm build
   pnpm start
   ```
   Ensure the production build works correctly.

3. **Lint checking**
   ```bash
   pnpm lint
   ```

4. **Accessibility check**
   - Use keyboard navigation
   - Check screen reader compatibility (if applicable)
   - Verify ARIA labels and semantic HTML

### Submitting a Pull Request

1. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your feature branch
   - Fill out the PR template completely

3. **PR Title Format**
   ```
   <type>: <description>
   ```
   Example: `feat: add dark mode toggle to navbar`

4. **PR Description Should Include:**
   - Summary of changes
   - Related issue numbers (if any)
   - Screenshots/GIFs for UI changes
   - Testing performed
   - Any breaking changes

5. **Wait for Review**
   - A maintainer will review your PR
   - Address any requested changes
   - Once approved, your PR will be merged!

---

## Coding Standards

### TypeScript Guidelines

- **Always use TypeScript** - Avoid `any` type unless absolutely necessary
- **Define proper types** - Create interfaces and types in `@types/index.d.ts`
- **Use type inference** - Let TypeScript infer types when obvious
- **Prefer interfaces over types** - For object shapes

**Example:**
```typescript
// Good
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

// Avoid
type ProjectCardProps = {
  title: any;
  description: any;
};
```

### React Best Practices

- **Use functional components** - No class components
- **Server Components by default** - Only use `'use client'` when necessary
- **Component organization:**
  ```tsx
  // 1. Imports
  import { ComponentProps } from '@/types';

  // 2. Interface/Type definitions
  interface Props {
    // ...
  }

  // 3. Component
  export default function Component({ props }: Props) {
    // 4. Hooks
    // 5. Functions
    // 6. Return JSX
  }
  ```
- **Destructure props** - `function Component({ title, description })` not `function Component(props)`
- **Use meaningful variable names** - `isLoading` not `flag`, `projectData` not `data`

**Server vs Client Components:**
```tsx
// Server Component (default in Next.js App Router)
export default async function ProjectsPage() {
  const projects = await getProjects(); // Data fetching on server
  return <div>{/* render */}</div>;
}

// Client Component (when interactivity is needed)
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({});
  // Event handlers, state, etc.
}
```

### CSS/Tailwind Guidelines

- **Use Tailwind utility classes** - Avoid custom CSS when possible
- **Follow mobile-first approach** - `md:`, `lg:`, `xl:` breakpoints
- **Use custom Tailwind colors:**
  - `bg-app` - Primary color (#550a0a)
  - `bg-app-bg` - Background color (#f7f8fb)
  - `bg-app-secondary` - Secondary color (#b4843e)
- **Component styling order:**
  ```tsx
  // Layout → Spacing → Typography → Visual → Interaction
  <div className="flex flex-col gap-4 p-6 text-lg font-bold bg-white hover:bg-gray-100">
  ```

### File Naming Conventions

- **Components:** PascalCase - `ProjectCard.tsx`, `HeroSection.tsx`
- **Utilities:** camelCase - `utils.ts`, `helper.ts`
- **Types:** PascalCase - `index.d.ts` with PascalCase interfaces
- **Pages:** lowercase - `page.tsx`, `layout.tsx`
- **Constants:** UPPERCASE - `NAVIGATION.ts`, `SRCC.ts`

**Directory structure:**
```
components/
  ├── projects/
  │   ├── ProjectCard.tsx        # Individual component
  │   ├── ProjectHeader.tsx
  │   └── ProjectGallery.tsx
  └── ui/
      └── button.tsx             # shadcn/ui components (lowercase)
```

---

## Project-Specific Guidelines

### Working with Sanity CMS

#### Modifying Schemas

Schemas are located in `/sanity/schemas/`:

```typescript
// Example: Adding a new field to Project schema
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'newField',
      title: 'New Field',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // ... other fields
  ],
});
```

#### Creating GROQ Queries

Queries are in `/sanity/queries/`:

```typescript
// Example: queries/project.ts
import { groq } from 'next-sanity';

export const PROJECT = {
  getAll: groq`*[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    coverImage,
    description
  }`,

  getIndividual: groq`*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    body,
    // ... all fields
  }`,
};
```

#### Fetching Data in Components

```typescript
// Server Component (recommended)
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { PROJECT } from '@/sanity/queries/project';

export default async function ProjectsPage() {
  const projects = await sanityFetch({
    query: PROJECT.getAll,
    tags: ['project'], // For revalidation
  });

  return <div>{/* render projects */}</div>;
}
```

### Adding New Components

1. **Determine component type:**
   - UI Component → `/components/ui/`
   - Feature Component → `/components/[feature]/`
   - Reusable Component → `/components/reusable/`

2. **Create component file:**
   ```tsx
   // components/projects/ProjectCard.tsx
   import { SRCC_Project } from '@/types';

   interface ProjectCardProps {
     project: SRCC_Project;
   }

   export default function ProjectCard({ project }: ProjectCardProps) {
     return (
       <div>
         {/* Component JSX */}
       </div>
     );
   }
   ```

3. **Add types to `@types/index.d.ts` if needed**

4. **Import and use:**
   ```tsx
   import ProjectCard from '@/components/projects/ProjectCard';
   ```

### Creating API Routes

API routes are in `/app/api/`:

```typescript
// app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ApiError } from '@/lib/apiError';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    if (!body.field) {
      throw new ApiError('Field is required', 400);
    }

    // Logic here

    return NextResponse.json({
      success: true,
      message: 'Success message',
    });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: error.statusCode }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Adding New Pages

Pages use the Next.js App Router structure:

```
app/
└── (main)/
    └── new-page/
        ├── page.tsx          # Required: Page component
        ├── layout.tsx        # Optional: Page-specific layout
        └── loading.tsx       # Optional: Loading state
```

**Example page:**
```tsx
// app/(main)/new-page/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | SRCC',
  description: 'Page description',
};

export default async function NewPage() {
  // Fetch data if needed

  return (
    <main>
      {/* Page content */}
    </main>
  );
}
```

**Don't forget to:**
- Add navigation link to `constants/navigation.ts` if applicable
- Update sitemap in `app/sitemap.ts` for dynamic routes
- Add to robots.txt if needed

---

## Reporting Bugs

Found a bug? Please help us fix it!

1. **Check existing issues** - Search for similar issues first
2. **Create a new issue** using the [Bug Report template](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues/new?template=bug_report.md)
3. **Provide details:**
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/device information
   - Error messages or console logs

---

## Requesting Features

Have an idea for a new feature?

1. **Check existing feature requests** - Someone might have already suggested it
2. **Create a new issue** using the [Feature Request template](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues/new?template=feature_request.md)
3. **Describe your feature:**
   - Problem it solves
   - Proposed solution
   - Alternative solutions considered
   - Additional context or mockups

---

## Questions and Support

Need help? Have questions?

- **GitHub Discussions** - Ask questions and discuss ideas
- **GitHub Issues** - For specific bugs or features
- **Email** - [shrirajayohamcc@gmail.com](mailto:shrirajayohamcc@gmail.com)

---

## Recognition

Contributors will be recognized in several ways:

- Listed in GitHub contributors
- Mentioned in release notes (for significant contributions)
- Added to project acknowledgments

---

## Thank You!

Thank you for taking the time to contribute to the Shri Rajayoham Construction Company website. Your efforts help make this project better for everyone!

**Happy Coding! 🚀**
