# Troubleshooting Guide

## Table of Contents

- [Common Issues](#common-issues)
  - [Installation & Setup](#installation--setup)
  - [Development Server](#development-server)
  - [Build & Deployment](#build--deployment)
  - [Sanity CMS](#sanity-cms)
  - [Contact Forms & Email](#contact-forms--email)
  - [Performance Issues](#performance-issues)
  - [TypeScript Errors](#typescript-errors)
- [Debugging Tips](#debugging-tips)
- [Getting Help](#getting-help)

---

## Common Issues

### Installation & Setup

#### Problem: `pnpm install` fails with dependency resolution errors

**Symptoms:**
```
ERR_PNPM_PEER_DEP_ISSUES  Unmet peer dependencies
```

**Solutions:**
1. Clear pnpm cache:
   ```bash
   pnpm store prune
   pnpm install
   ```

2. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

3. Use `--force` flag (last resort):
   ```bash
   pnpm install --force
   ```

---

#### Problem: Environment variables not loading

**Symptoms:**
- Sanity content not displaying
- API calls failing
- Console errors about missing environment variables

**Solutions:**
1. Verify `.env.local` exists in root directory
2. Check variable names match exactly (case-sensitive):
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123
   NEXT_PUBLIC_SANITY_DATASET=production
   NODEMAILER_EMAIL=email@gmail.com
   NODEMAILER_PASSWORD=your_app_password
   ```
3. Restart development server after adding/changing env vars
4. Ensure no spaces around `=` in env file
5. Check `.env.local` is in `.gitignore` (should NOT be committed)

---

#### Problem: Node version incompatibility

**Symptoms:**
```
error: The engine "node" is incompatible with this module
```

**Solutions:**
1. Check Node.js version:
   ```bash
   node --version
   ```
2. Upgrade to Node.js 18 or higher:
   ```bash
   # Using nvm
   nvm install 18
   nvm use 18
   ```

---

### Development Server

#### Problem: Port 3000 already in use

**Symptoms:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solutions:**
1. Kill process using port 3000:
   ```bash
   # macOS/Linux
   lsof -ti:3000 | xargs kill -9

   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

2. Use different port:
   ```bash
   PORT=3001 pnpm dev
   ```

---

#### Problem: Hot reload not working

**Symptoms:**
- Changes not reflecting in browser
- Must manually refresh to see updates

**Solutions:**
1. Clear Next.js cache:
   ```bash
   rm -rf .next
   pnpm dev
   ```

2. Disable browser extensions (especially ad blockers)

3. Check file watcher limits (Linux):
   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

4. Restart development server

---

#### Problem: White screen / blank page

**Symptoms:**
- Browser shows blank white screen
- No console errors

**Solutions:**
1. Check browser console for errors (F12)
2. Clear browser cache and hard reload (Ctrl+Shift+R)
3. Check if JavaScript is enabled in browser
4. Verify no ad blockers are interfering
5. Try incognito/private mode

---

### Build & Deployment

#### Problem: Build fails with TypeScript errors

**Symptoms:**
```
Type error: Property 'foo' does not exist on type 'Bar'
```

**Solutions:**
1. Run type check locally:
   ```bash
   pnpm tsc --noEmit
   ```

2. Fix reported type errors

3. Ensure `@types/index.d.ts` has all necessary types

4. Check for `any` types that might be hiding errors:
   ```bash
   grep -r ": any" --include="*.ts" --include="*.tsx"
   ```

---

#### Problem: Build succeeds but pages don't load in production

**Symptoms:**
- `pnpm build` completes successfully
- 404 errors or blank pages in production

**Solutions:**
1. Check for dynamic imports without proper error handling
2. Verify all environment variables are set in production
3. Check build output:
   ```bash
   pnpm build
   # Look for errors or warnings
   ```

4. Test production build locally:
   ```bash
   pnpm build
   pnpm start
   # Open http://localhost:3000
   ```

---

#### Problem: Image optimization errors

**Symptoms:**
```
Error: Image Optimization using Next.js' default loader is not compatible with `output: 'export'`.
```

**Solutions:**
1. Check `next.config.js` settings:
   ```javascript
   module.exports = {
     images: {
       unoptimized: true, // Only if deploying statically
       remotePatterns: [
         {
           protocol: 'https',
           hostname: 'cdn.sanity.io',
         },
       ],
     },
   };
   ```

2. Ensure images from Sanity use proper `@sanity/image-url`

---

### Sanity CMS

#### Problem: Can't access Sanity Studio at `/studio`

**Symptoms:**
- 404 error at `/studio`
- Studio page won't load

**Solutions:**
1. Verify Sanity environment variables are set:
   ```bash
   echo $NEXT_PUBLIC_SANITY_PROJECT_ID
   echo $NEXT_PUBLIC_SANITY_DATASET
   ```

2. Check `app/studio/[[...index]]/page.tsx` exists

3. Clear Next.js cache:
   ```bash
   rm -rf .next
   pnpm dev
   ```

4. Verify `sanity.config.ts` has correct configuration:
   ```typescript
   basePath: '/studio',
   ```

---

#### Problem: Sanity content not displaying

**Symptoms:**
- Pages load but content is missing
- Console errors about failed fetch requests

**Solutions:**
1. Verify Sanity project ID and dataset name
2. Check CORS settings in [Sanity Manage](https://www.sanity.io/manage):
   - Add `http://localhost:3000`
   - Add production URL

3. Test Sanity API connection:
   ```bash
   curl "https://[PROJECT_ID].api.sanity.io/v1/data/query/[DATASET]?query=*[_type == 'post']"
   ```

4. Check network tab for failed API requests
5. Verify content is published (not in draft state)

---

#### Problem: GROQ queries return empty results

**Symptoms:**
- Queries execute but return `[]`
- Content exists in Sanity Studio

**Solutions:**
1. Check dataset name (production vs. development)
2. Verify content is published (click "Publish" in Studio)
3. Test query in Sanity Vision tool (`/studio` → Vision tab)
4. Check query syntax:
   ```groq
   *[_type == "post"] {  // Correct
     title,
     slug
   }
   ```

5. Clear ISR cache:
   - Wait 60 seconds (ISR revalidation time)
   - Or redeploy

---

### Contact Forms & Email

#### Problem: Contact form submission fails

**Symptoms:**
- Form shows error after submission
- Network errors in console

**Solutions:**
1. Check API route is accessible:
   ```bash
   curl -X POST http://localhost:3000/api/contact/enquiry \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","phoneNumber":"9876543210","message":"Test"}'
   ```

2. Verify email credentials in `.env.local`:
   ```env
   NODEMAILER_EMAIL=your_email@gmail.com
   NODEMAILER_PASSWORD=your_app_password
   ```

3. Check Gmail app password (not regular password):
   - Go to Google Account → Security → App passwords
   - Generate new 16-character password

4. Check server logs for specific errors

---

#### Problem: Rate limit errors

**Symptoms:**
```json
{
  "message": "contact/rate-limit-exceeded"
}
```

**Solutions:**
1. **Expected behavior:** You can only submit 3 forms per hour per form type
2. Wait 1 hour for rate limit to reset
3. Test with different form types (separate limits)
4. In development, restart server to reset in-memory cache

**Note:** This is a security feature, not a bug!

---

#### Problem: Emails not being received

**Symptoms:**
- Form submission succeeds
- No email received

**Solutions:**
1. **Check spam folder** - Emails might be filtered
2. Verify `NODEMAILER_EMAIL` is correct recipient
3. Check Gmail app password is valid
4. Test email configuration:
   ```typescript
   // Temporarily log email instead of sending
   console.log('Email content:', emailText);
   ```

5. Verify Gmail account:
   - Not blocked
   - 2FA enabled
   - App passwords feature available

6. Check Nodemailer transporter configuration in code

---

### Performance Issues

#### Problem: Slow page loads

**Symptoms:**
- Pages take >3 seconds to load
- Poor Lighthouse scores

**Solutions:**
1. **Check ISR configuration:**
   ```typescript
   export const revalidate = 60; // Should be set
   ```

2. **Optimize images:**
   - Use Next.js Image component
   - Compress images before uploading to Sanity
   - Enable progressive loading

3. **Check bundle size:**
   ```bash
   pnpm build
   # Review output for large bundles
   ```

4. **Use server components:**
   - Remove unnecessary `'use client'` directives
   - Fetch data on server when possible

5. **Review Vercel Analytics** for specific bottlenecks

---

#### Problem: High memory usage

**Symptoms:**
- Development server crashes
- Out of memory errors

**Solutions:**
1. Increase Node memory limit:
   ```bash
   NODE_OPTIONS="--max-old-space-size=4096" pnpm dev
   ```

2. Clear Next.js cache:
   ```bash
   rm -rf .next
   ```

3. Check for memory leaks:
   - Remove unused imports
   - Fix infinite loops
   - Clean up useEffect hooks

---

### TypeScript Errors

#### Problem: "Cannot find module" errors

**Symptoms:**
```
Cannot find module '@/components/Example' or its corresponding type declarations
```

**Solutions:**
1. Check import path matches file structure:
   ```typescript
   // Correct
   import Example from '@/components/Example';

   // File should be at: components/Example.tsx
   ```

2. Verify `tsconfig.json` path aliases:
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./*"]
       }
     }
   }
   ```

3. Restart TypeScript server in VS Code:
   - Command Palette (Ctrl+Shift+P)
   - "TypeScript: Restart TS Server"

---

#### Problem: Type errors in Sanity data

**Symptoms:**
```
Property 'slug' does not exist on type 'SRCC_Project'
```

**Solutions:**
1. Update types in `@types/index.d.ts`
2. Regenerate types from Sanity:
   ```bash
   # Install Sanity CLI
   npm install -g @sanity/cli

   # Generate types (if configured)
   sanity typegen generate
   ```

3. Use type assertions carefully:
   ```typescript
   const project = data as SRCC_Project;
   ```

---

## Debugging Tips

### Enable Verbose Logging

```bash
# Next.js
DEBUG=* pnpm dev

# Sanity
DEBUG=sanity:* pnpm dev
```

### Check Build Output

```bash
pnpm build --debug
```

### Browser DevTools

1. **Console Tab:** Check for JavaScript errors
2. **Network Tab:** Monitor API requests/responses
3. **React DevTools:** Inspect component props/state
4. **Performance Tab:** Profile page load speed

### Server Logs

**Development:**
```bash
pnpm dev
# Watch terminal for errors
```

**Production (Vercel):**
- Vercel Dashboard → Project → Functions
- View real-time logs

### Common Debug Commands

```bash
# Type check
pnpm tsc --noEmit

# Lint
pnpm lint

# Build locally
pnpm build

# Test production build
pnpm build && pnpm start

# Clear all caches
rm -rf .next node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

---

## Getting Help

### Before Asking for Help

1. **Search existing issues:** [GitHub Issues](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues)
2. **Check documentation:**
   - [README.md](./README.md)
   - [CONTRIBUTING.md](./CONTRIBUTING.md)
   - [docs/](./docs/)
3. **Try debugging steps above**
4. **Reproduce in clean environment**

### Creating a Good Issue

Include the following information:

1. **Environment:**
   - OS and version
   - Node.js version
   - Browser and version
   - Package manager (pnpm)

2. **Steps to reproduce:**
   - Exact commands run
   - Expected vs actual behavior
   - Error messages (full stack trace)

3. **What you've tried:**
   - Solutions attempted
   - Results of each attempt

4. **Code samples:**
   ```typescript
   // Minimal reproducible example
   ```

### Where to Get Help

- **GitHub Issues:** [Report bugs](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues/new?template=bug_report.md)
- **GitHub Discussions:** Ask questions
- **Email:** shrirajayohamcc@gmail.com
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Sanity Docs:** [sanity.io/docs](https://www.sanity.io/docs)

---

## Quick Reference

### Reset Everything

```bash
# Nuclear option - reset entire project
rm -rf .next node_modules pnpm-lock.yaml
pnpm install
rm -rf .env.local
cp .env.sample .env.local
# Edit .env.local with your values
pnpm dev
```

### Check All Systems

```bash
# Verify installation
node --version  # Should be 18+
pnpm --version  # Should be 8+

# Check environment
cat .env.local

# Test build
pnpm build

# Run linter
pnpm lint

# Type check
pnpm tsc --noEmit
```

---

**Last Updated:** November 2024

**Can't find your issue?** [Open a new issue](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues/new/choose)
