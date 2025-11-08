# Deployment Guide

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Deployment Platforms](#deployment-platforms)
  - [Vercel (Recommended)](#vercel-recommended)
  - [Netlify](#netlify)
  - [Self-Hosted](#self-hosted)
- [Post-Deployment Configuration](#post-deployment-configuration)
- [Monitoring & Analytics](#monitoring--analytics)
- [Troubleshooting](#troubleshooting)
- [Performance Optimization](#performance-optimization)
- [Continuous Deployment](#continuous-deployment)

---

## Overview

This guide covers deploying the Shri Rajayoham Construction Company website to various platforms. The recommended platform is **Vercel** due to its seamless Next.js integration and automatic optimizations.

**Deployment Architecture:**
- **Framework:** Next.js 14 with App Router
- **Rendering:** ISR (Incremental Static Regeneration) with 60s revalidation
- **API Routes:** Serverless functions
- **CMS:** Sanity (hosted separately)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ **Sanity CMS Project** - [See SANITY_SETUP.md](./SANITY_SETUP.md)
- ✅ **Gmail Account with App Password** - For contact form emails
- ✅ **GitHub Repository** - Code pushed to GitHub
- ✅ **Domain Name** - (Optional) for custom domain
- ✅ **Google Analytics ID** - Already configured (`G-EZ0LTX6W1K`)

---

## Environment Variables

Set up the following environment variables in your deployment platform:

### Required Variables

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production

# Email Configuration (Nodemailer)
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_16_character_app_password
```

### Optional Variables

```env
# Sanity API Token (for draft mode - optional)
SANITY_API_READ_TOKEN=your_sanity_read_token

# Node Environment (usually set automatically)
NODE_ENV=production
```

**Important Notes:**
- Never commit `.env.local` to version control
- Use strong, unique app passwords
- Rotate credentials periodically
- Keep `NEXT_PUBLIC_*` variables public-safe (exposed to client)

---

## Deployment Platforms

### Vercel (Recommended)

Vercel is the creator of Next.js and provides the best deployment experience.

#### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Authorize Vercel to access your repositories

#### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. Select your **Shri-Rajayoham-Construction** repository
3. Vercel will auto-detect Next.js framework

#### Step 3: Configure Project

**Framework Preset:**
```
Framework: Next.js
Build Command: pnpm build (or leave default)
Output Directory: .next (default)
Install Command: pnpm install
```

**Root Directory:**
```
Leave as root (./
)
```

#### Step 4: Add Environment Variables

Click **"Environment Variables"** and add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = your_value
NEXT_PUBLIC_SANITY_DATASET = production
NODEMAILER_EMAIL = your_email@gmail.com
NODEMAILER_PASSWORD = your_app_password
```

**Environment Scope:**
- Production ✅
- Preview ✅ (optional)
- Development (optional)

#### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-5 minutes for build to complete
3. Vercel provides a URL: `https://your-project.vercel.app`

#### Step 6: Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Add your custom domain: `shrirajayohamcc.com`
3. Update DNS records as instructed:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (5-60 minutes)

#### Vercel CLI Deployment

For advanced users:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Set environment variables
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
```

---

### Netlify

Alternative to Vercel with similar features.

#### Step 1: Create Netlify Account

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up with GitHub

#### Step 2: Import Repository

1. Click **"Add new site"** → **"Import an existing project"**
2. Select GitHub and authorize
3. Choose **Shri-Rajayoham-Construction** repository

#### Step 3: Build Settings

```
Build command: pnpm build
Publish directory: .next
```

#### Step 4: Environment Variables

Add in **Site settings** → **Build & deploy** → **Environment**:

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NODEMAILER_EMAIL
NODEMAILER_PASSWORD
```

#### Step 5: Deploy

1. Click **"Deploy site"**
2. Access at: `https://random-name.netlify.app`

**Note:** Netlify requires additional configuration for Next.js middleware and API routes. Vercel is recommended.

---

### Self-Hosted

For deployment on your own server.

#### Prerequisites

- **Node.js 18+** installed
- **pnpm** package manager
- **Nginx** or **Apache** web server
- **PM2** for process management
- **SSL certificate** (Let's Encrypt)

#### Step 1: Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install pnpm
npm install -g pnpm

# Install PM2
npm install -g pm2
```

#### Step 2: Clone Repository

```bash
cd /var/www
git clone https://github.com/kunalkeshan/Shri-Rajayoham-Construction.git
cd Shri-Rajayoham-Construction
```

#### Step 3: Environment Setup

```bash
# Create .env.local
nano .env.local

# Add environment variables
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_password
```

#### Step 4: Build & Start

```bash
# Install dependencies
pnpm install

# Build production
pnpm build

# Start with PM2
pm2 start npm --name "srcc-website" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 startup script
pm2 startup
```

#### Step 5: Nginx Configuration

```nginx
# /etc/nginx/sites-available/shrirajayohamcc.com

server {
    listen 80;
    server_name shrirajayohamcc.com www.shrirajayohamcc.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/shrirajayohamcc.com /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### Step 6: SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d shrirajayohamcc.com -d www.shrirajayohamcc.com

# Auto-renewal is configured automatically
```

#### Updating the Deployment

```bash
cd /var/www/Shri-Rajayoham-Construction
git pull origin main
pnpm install
pnpm build
pm2 restart srcc-website
```

---

## Post-Deployment Configuration

### 1. Verify Environment Variables

Test that all environment variables are set correctly:

```bash
# Check build logs for any warnings
# Verify Sanity CMS connection
# Test contact forms
# Check email delivery
```

### 2. Update Sanity CORS Settings

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **Settings** → **API**
4. Add your production URL:
   ```
   https://shrirajayohamcc.com
   https://www.shrirajayohamcc.com
   ```

### 3. Configure Domain

If using a custom domain:

1. **DNS Configuration:** Point to deployment platform
2. **SSL Certificate:** Auto-configured on Vercel/Netlify
3. **Redirects:** Set up www → non-www or vice versa

### 4. Set Up Monitoring

- **Vercel Analytics:** Enabled by default
- **Google Analytics:** Already configured in code
- **Uptime Monitoring:** Consider UptimeRobot or StatusCake

---

## Monitoring & Analytics

### Google Analytics

The site already includes GA4 tracking:

```typescript
// components/reusable/GoogleAnalytics.tsx
export const GA_TRACKING_ID = 'G-EZ0LTX6W1K';
```

**Verify Setup:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Check Real-Time reports
3. Visit your deployed site
4. Confirm page views are tracked

### Vercel Speed Insights

Already integrated:

```typescript
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <SpeedInsights />
    </>
  );
}
```

**Access Insights:**
1. Vercel Dashboard → Your Project
2. Click **"Analytics"** tab
3. View Core Web Vitals

### Error Tracking

Consider integrating **Sentry** for error monitoring:

```bash
npm install @sentry/nextjs
```

---

## Troubleshooting

### Build Failures

**Problem:** Build fails with TypeScript errors

**Solution:**
```bash
# Run type check locally
pnpm tsc --noEmit

# Fix any type errors before deploying
```

---

**Problem:** Build fails with missing environment variables

**Solution:**
- Verify all required env vars are set in deployment platform
- Check for typos in variable names
- Ensure `NEXT_PUBLIC_*` prefix for client-side variables

---

### Runtime Errors

**Problem:** 500 error on contact form submission

**Solution:**
- Check `NODEMAILER_EMAIL` and `NODEMAILER_PASSWORD` are set correctly
- Verify Gmail app password is valid
- Check server logs for specific error

---

**Problem:** Sanity content not loading

**Solution:**
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
- Check Sanity project is not paused
- Verify CORS settings in Sanity dashboard

---

### Performance Issues

**Problem:** Slow page loads

**Solution:**
- Enable ISR revalidation (already set to 60s)
- Check image optimization is working
- Verify CDN is caching assets
- Review Vercel Analytics for bottlenecks

---

## Performance Optimization

### Caching Headers

Vercel automatically sets optimal caching headers:

```
Cache-Control: public, max-age=0, must-revalidate (HTML)
Cache-Control: public, max-age=31536000, immutable (Static assets)
```

### Image Optimization

Next.js Image component automatically optimizes:

- WebP format conversion
- Responsive sizing
- Lazy loading
- Blur placeholder

### CDN Configuration

**Vercel Edge Network:**
- Automatic global CDN
- 70+ edge locations worldwide
- Automatic cache invalidation on deploy

---

## Continuous Deployment

### Automatic Deployments

**Production (main branch):**
```
git push origin main
→ Triggers production deployment
```

**Preview (feature branches):**
```
git push origin feature/new-feature
→ Creates preview deployment
```

### Deployment Protection

**Enable Branch Protection:**

1. GitHub → Settings → Branches
2. Add rule for `main`
3. Enable:
   - Require pull request reviews
   - Require status checks to pass
   - Require branches to be up to date

### Deployment Workflow

```
1. Create feature branch
2. Make changes
3. Push to GitHub
4. Vercel creates preview deployment
5. Review preview URL
6. Merge to main
7. Auto-deploy to production
```

---

## Rollback Strategy

### Vercel Rollback

1. Vercel Dashboard → Deployments
2. Find previous successful deployment
3. Click **"..."** → **"Promote to Production"**
4. Confirm rollback

### Self-Hosted Rollback

```bash
# Tag releases
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0

# Rollback to tag
git checkout v1.0.0
pnpm install
pnpm build
pm2 restart srcc-website
```

---

## Security Checklist

Before going live:

- [ ] All environment variables are secure
- [ ] HTTPS is enabled
- [ ] Sanity CORS is configured for production domain
- [ ] Gmail app password is unique
- [ ] No secrets in git history
- [ ] Rate limiting is working
- [ ] Input validation is enabled
- [ ] Security headers are set (Vercel does this automatically)

---

## Support

For deployment issues:

- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **GitHub Issues:** [Report deployment issues](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues)
- **Documentation:** See [TROUBLESHOOTING.md](../TROUBLESHOOTING.md)

---

**Last Updated:** November 2024

**Next Steps:**
- Set up custom domain
- Configure monitoring
- Test all features in production
- Monitor performance metrics
