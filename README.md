<div align="center">
  <img src="./public/assets/logo.png" alt="Shri Rajayoham Construction Company Logo" width="200"/>

  # Shri Rajayoham Construction Company

  **Modern, Full-Stack Construction Company Website**

  A high-performance Next.js website featuring comprehensive project showcases, service packages, blog, career opportunities, and dynamic content management through Sanity CMS.

  [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
  [![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
  [![Sanity CMS](https://img.shields.io/badge/Sanity-3.23.4-red)](https://www.sanity.io/)

  [Live Demo](https://shrirajayohamcc.com) · [Report Bug](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues) · [Request Feature](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues)

</div>

---

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
  - [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Development Server](#running-the-development-server)
  - [Accessing Sanity Studio](#accessing-sanity-studio)
- [Project Structure](#project-structure)
- [Features In Detail](#features-in-detail)
  - [Content Management](#content-management)
  - [Contact Forms](#contact-forms)
  - [SEO Optimizations](#seo-optimizations)
  - [Performance Features](#performance-features)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## About The Project

The **Shri Rajayoham Construction Company** website is a comprehensive digital platform designed to showcase construction projects, services, and company information. Built with modern web technologies, it provides an exceptional user experience with features like progressive image loading, SEO optimization, and intelligent rate limiting for form submissions.

### Built With

This project leverages cutting-edge technologies to deliver a robust and scalable solution:

#### Core Framework
- **[Next.js 14.2.35](https://nextjs.org/)** - React framework with App Router
- **[React 18.2.0](https://react.dev/)** - UI library
- **[TypeScript 5.3.3](https://www.typescriptlang.org/)** - Type-safe JavaScript

#### Content Management
- **[Sanity CMS 3.23.4](https://www.sanity.io/)** - Headless CMS for content management
- **[@sanity/client](https://www.npmjs.com/package/@sanity/client)** - Sanity client for data fetching
- **[@sanity/image-url](https://www.npmjs.com/package/@sanity/image-url)** - Image transformation
- **[@portabletext/react](https://github.com/portabletext/react-portabletext)** - Rich text rendering

#### UI & Styling
- **[Tailwind CSS 3.4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component collection
- **[Framer Motion 11.0.3](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

#### Forms & Validation
- **[React Hook Form 7.49.2](https://react-hook-form.com/)** - Performant form handling
- **[Zod 3.22.4](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form resolver integration

#### Email & Communication
- **[Nodemailer 6.9.8](https://nodemailer.com/)** - Email sending functionality

#### Developer Experience
- **[ESLint](https://eslint.org/)** - Code linting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

#### Additional Libraries
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel functionality
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Axios](https://axios-http.com/)** - HTTP client
- **[node-cache](https://www.npmjs.com/package/node-cache)** - In-memory caching for rate limiting

### Key Features

#### Content Types
- **Projects** - Showcase construction projects with detailed information, image galleries, status tracking, and location maps
- **Packages** - Construction service packages with pricing calculators
- **Blog** - Articles and insights with rich text content, categories, and social sharing
- **Careers** - Job listings with detailed descriptions and application links
- **Team Members** - Team profiles with roles, qualifications, and social links
- **Testimonials** - Client reviews and ratings
- **FAQs** - Frequently asked questions with custom ordering
- **CSR & Events** - Corporate social responsibility initiatives and events

#### User Features
- **5 Specialized Contact Forms** with individual validation schemas
- **Rate Limiting System** - 3 requests/hour per form type with 24-hour blocking
- **Progressive Image Loading** - Smooth image loading experience
- **WhatsApp CTA** - Floating WhatsApp contact button
- **Query Modal** - Engagement modal appearing after 10 seconds
- **Social Sharing** - Share blog posts on social media
- **Read Time Calculator** - Estimated reading time for blog posts
- **Responsive Design** - Mobile-first approach across all devices

#### Technical Features
- **ISR (Incremental Static Regeneration)** - 60-second revalidation for fresh content
- **SEO Optimization** - Dynamic metadata, Open Graph tags, Twitter Cards, sitemap, robots.txt
- **Google Analytics (GA4)** - User behavior tracking
- **Vercel Speed Insights** - Performance monitoring
- **Type Safety** - Comprehensive TypeScript definitions
- **Server Components** - Performance-optimized with Next.js App Router
- **API Routes** - RESTful endpoints for form submissions
- **Sanity Studio** - Built-in CMS access at `/studio`

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **pnpm** (v8.0.0 or higher)
  ```bash
  npm install -g pnpm
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunalkeshan/Shri-Rajayoham-Construction.git
   cd Shri-Rajayoham-Construction
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Copy the sample environment file:
   ```bash
   cp .env.sample .env.local
   ```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

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

1. Create a Sanity account at [sanity.io](https://www.sanity.io/)
2. Create a new project or use an existing one
3. Note your **Project ID** and **Dataset name** (usually `production`)
4. Add these to your `.env.local` file

For detailed Sanity setup instructions, see [docs/SANITY_SETUP.md](./docs/SANITY_SETUP.md).

#### Setting Up Nodemailer with Gmail

To enable contact form email notifications:

1. Go to your [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **Security** → **App passwords**
4. Generate a new app password for "Mail" / "Other"
5. Use your Gmail address as `NODEMAILER_EMAIL`
6. Use the generated 16-character password as `NODEMAILER_PASSWORD`

For more details, refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

### Running the Development Server

Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Accessing Sanity Studio

The Sanity Studio CMS interface is accessible at:

```
http://localhost:3000/studio
```

You can manage all content (projects, blogs, team members, etc.) through this interface.

---

## Project Structure

```
Shri-Rajayoham-Construction/
├── app/                      # Next.js App Router
│   ├── (main)/              # Main route group
│   │   ├── about/           # About page
│   │   ├── blogs/           # Blog listing & individual posts
│   │   ├── careers/         # Career listings & job details
│   │   ├── contact/         # Contact page
│   │   ├── packages/        # Package listings & details
│   │   ├── privacy/         # Privacy policy
│   │   ├── projects/        # Project listings & details
│   │   └── terms/           # Terms & conditions
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form handlers
│   ├── studio/              # Sanity Studio route
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── robots.ts            # Robots.txt generator
│   └── sitemap.ts           # Sitemap generator
├── components/              # React components
│   ├── about/              # About page components
│   ├── blogs/              # Blog components
│   ├── cards/              # Reusable card components
│   ├── careers/            # Career components
│   ├── contact/            # Contact form components
│   ├── home/               # Homepage sections
│   ├── icons/              # Custom icons
│   ├── packages/           # Package components
│   ├── projects/           # Project components
│   ├── reusable/           # Shared utility components
│   └── ui/                 # shadcn/ui components
├── layouts/                # Layout components
│   ├── Footer.tsx          # Site footer
│   ├── Navbar.tsx          # Navigation bar
│   ├── QuickLinks.tsx      # Top quick links
│   └── SheetNav.tsx        # Mobile navigation
├── sanity/                 # Sanity CMS configuration
│   ├── queries/            # GROQ queries
│   ├── schemas/            # Content schemas
│   └── lib/                # Sanity utilities
├── lib/                    # Utility functions
│   ├── utils.ts            # General utilities
│   ├── helper.ts           # Helper functions
│   └── apiError.ts         # API error handling
├── services/               # API service functions
│   └── contact.ts          # Contact form service
├── constants/              # Static data & configurations
│   ├── navigation.ts       # Navigation links
│   ├── srcc.ts            # Company constants
│   └── legal.ts           # Legal content
├── hooks/                  # Custom React hooks
│   └── use-progressive-image.ts
├── context/                # React Context providers
│   └── QueryModalContext.tsx
├── @types/                 # TypeScript type definitions
│   └── index.d.ts
├── public/                 # Static assets
│   └── assets/            # Images and media
├── docs/                   # Additional documentation
├── .github/               # GitHub configuration
│   └── ISSUE_TEMPLATE/    # Issue templates
├── .husky/                # Git hooks
├── config.ts              # App configuration
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── sanity.config.ts       # Sanity CMS configuration
└── package.json           # Dependencies and scripts
```

---

## Features In Detail

### Content Management

All content is managed through **Sanity CMS** with the following schemas:

- **Projects** - Status tracking (upcoming, ongoing, completed, sale, rent), budget, duration, location, image gallery, testimonials
- **Packages** - Service packages with pricing (per sq. ft.), features, and associated services
- **Blog Posts** - Rich text content with categories, featured images, author information
- **Services** - Individual services with icons and descriptions
- **Team Members** - Profiles with positions, roles, qualifications, and social links
- **Careers** - Job openings with experience requirements, benefits, and application forms
- **Testimonials** - Client reviews with ratings (1-5 stars)
- **FAQs** - Ordered frequently asked questions
- **CSR & Events** - Corporate social responsibility initiatives
- **Impact Statistics** - Company achievements and milestones

### Contact Forms

The website features **5 specialized contact forms**, each with its own validation schema and rate limiting:

1. **General Enquiry** - For general questions and inquiries
2. **Investor Relations** - For investment opportunities
3. **Supplier/Vendor** - For partnership inquiries
4. **Services Required** - For service requests
5. **Careers** - For job applications

**Rate Limiting:**
- **3 submissions per hour** per form type
- **24-hour block** after exceeding limit
- IP-based tracking
- Separate limits for each form type

**Validation:**
- Phone number: Indian format (+91 followed by 10 digits starting with 6-9)
- PIN code: 6-digit Indian postal code
- Email: Standard email validation
- Required fields enforcement

### SEO Optimizations

- **Dynamic Metadata** - Page-specific titles, descriptions, and Open Graph tags
- **Sitemap Generation** - Automatic sitemap with all dynamic routes
- **Robots.txt** - Proper crawling directives
- **Canonical URLs** - Prevent duplicate content issues
- **Twitter Cards** - Rich social media previews
- **Structured Data** - Schema markup for better search visibility
- **60-Second ISR** - Fresh content while maintaining performance

### Performance Features

- **Progressive Image Loading** - Custom hook for smooth image loading
- **Next.js Image Optimization** - Automatic image optimization and lazy loading
- **Server Components** - Reduced client-side JavaScript
- **Code Splitting** - Automatic route-based code splitting
- **Font Optimization** - Google Font (Palanquin) optimized with next/font
- **Caching Strategy** - Intelligent caching with node-cache for rate limiting
- **Vercel Speed Insights** - Real-time performance monitoring
- **Google Analytics** - User behavior and performance tracking

---

## API Routes

### Contact Form Submission

**Endpoint:** `POST /api/contact/[task]`

**Available Tasks:**
- `enquiry` - General enquiry form
- `investor-relations` - Investor relations form
- `supplier-vendor` - Supplier/vendor form
- `services-required` - Services required form
- `careers` - Careers form

**Request Body:**
```typescript
{
  name: string;
  email: string;
  mobile: string;
  pincode: string;
  message: string;
}
```

**Response:**
```typescript
// Success
{
  success: true;
  message: string;
}

// Rate Limit Error
{
  success: false;
  message: string;
  blockedUntil?: number; // Timestamp when block expires
}
```

**Rate Limiting:**
- 3 requests per hour per form type
- 24-hour block after exceeding limit

For detailed API documentation, see [docs/API.md](./docs/API.md).

---

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js application is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically:
- Build your Next.js application
- Set up serverless functions for API routes
- Configure CDN and edge caching
- Enable automatic deployments on push

### Environment Variables for Production

Ensure the following environment variables are set in your deployment platform:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_app_password
```

For detailed deployment instructions, see [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md).

---

## Documentation

Additional documentation is available in the `docs/` directory:

- **[Architecture](./docs/ARCHITECTURE.md)** - Technical architecture and design decisions
- **[API Documentation](./docs/API.md)** - Detailed API endpoint documentation
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - Comprehensive deployment instructions
- **[Sanity Setup](./docs/SANITY_SETUP.md)** - Sanity CMS configuration guide
- **[Troubleshooting](./TROUBLESHOOTING.md)** - Common issues and solutions

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Quick Start for Contributors

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test locally (`pnpm dev`)
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

---

## License

This project is licensed under the **Mozilla Public License 2.0**. See the [LICENSE](./LICENSE) file for details.

The MPL 2.0 is a copyleft license that is easy to comply with. You must make the source code for any of your changes available under MPL, but you can combine the MPL software with proprietary code.

---

## Contact

**Shri Rajayoham Construction Company**

- **Website:** [shrirajayohamcc.com](https://shrirajayohamcc.com)
- **Email:** [shrirajayohamcc@gmail.com](mailto:shrirajayohamcc@gmail.com)
- **Phone:** +91 90258 69012 | +91 97894 78887
- **Address:** S.No: 350/23, First Floor, Nellikuppam Road, Kayarambedu, Guduvancheri, Chengalpattu - 603202 (Near Nayara Petrol Bunk)

**Social Media:**
- [Instagram](https://www.instagram.com/shri_rajayoham_construction)
- [Facebook](https://www.facebook.com/shri.rajayoham.construction.company)
- [LinkedIn](https://www.linkedin.com/company/shri-rajayoham-construction-company)
- [Twitter](https://twitter.com/Shrirajayohamcc)
- [YouTube](https://youtube.com/@Shrirajayohamcc?si=mSGrMtQ4M8N3468c)

**Developer:**
- **Kunal Keshan** - [@kunalkeshan](https://github.com/kunalkeshan)
- **Portfolio:** [kunalkeshan.dev](https://kunalkeshan.dev)

**Project Repository:** [https://github.com/kunalkeshan/Shri-Rajayoham-Construction](https://github.com/kunalkeshan/Shri-Rajayoham-Construction)

---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive Next.js guides
- [Sanity.io](https://www.sanity.io/) - Excellent headless CMS platform
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Vercel](https://vercel.com) - Seamless deployment platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- All open-source contributors and maintainers

---

<div align="center">
  Made with ❤️ by <a href="https://kunalkeshan.dev">Kunal Keshan</a>
  <br><br>
  <sub>Built for <strong>Shri Rajayoham Construction Company</strong></sub>
</div>
