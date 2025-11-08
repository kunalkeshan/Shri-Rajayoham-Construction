# Security Policy

## Overview

The security of the Shri Rajayoham Construction Company website and our users' data is a top priority. This document outlines our security measures, how to report vulnerabilities, and what to expect when you do.

## Supported Versions

We currently support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Security Features

### Rate Limiting

To protect against abuse and ensure fair usage, we implement IP-based rate limiting on all contact forms:

- **Limit:** 3 submissions per hour per form type
- **Block Duration:** 24 hours after exceeding limit
- **Scope:** Per-form tracking (separate limits for each of the 5 form types)
- **Tracking Method:** IP-based using NodeCache

**Forms Protected:**
1. General Enquiry
2. Investor Relations
3. Supplier/Vendor
4. Services Required
5. Careers

### Environment Variables Protection

Sensitive information is never committed to the repository. All secrets are managed through environment variables:

- **Sanity CMS credentials** - `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`
- **Email credentials** - `NODEMAILER_EMAIL`, `NODEMAILER_PASSWORD`
- **API tokens** - `SANITY_API_READ_TOKEN` (optional)

**Never commit `.env.local` files!**

### Input Validation

All user inputs are validated using **Zod schemas** before processing:

- **Email validation** - Standard RFC 5322 format
- **Phone number validation** - Indian format: `+91` followed by 10 digits starting with 6-9
- **PIN code validation** - 6-digit Indian postal code
- **String sanitization** - All text inputs are validated and sanitized

### API Security

- **CORS Configuration** - Properly configured Cross-Origin Resource Sharing
- **HTTP-only requests** - API routes only accept HTTPS in production
- **Error Handling** - No sensitive information exposed in error messages
- **Type Safety** - TypeScript ensures type safety across the application

### Content Security

- **Sanity CMS** - Content is managed through Sanity's secure platform
- **Image Optimization** - All images processed through Next.js Image component
- **XSS Protection** - React's built-in XSS protection for all user-generated content
- **SQL Injection Protection** - No direct database queries; all data through Sanity API

### HTTPS & Deployment Security

When deployed on Vercel:
- **Automatic HTTPS** - All traffic encrypted with TLS 1.3
- **DDoS Protection** - Vercel's built-in DDoS mitigation
- **Edge Caching** - Secure CDN distribution
- **Environment Isolation** - Production, preview, and development environments are isolated

## Reporting a Vulnerability

We take all security vulnerabilities seriously. If you discover a security issue, please follow these steps:

### 1. **DO NOT** create a public GitHub issue

Security vulnerabilities should be reported privately to avoid exploitation.

### 2. Email us directly

Send details to: **[shrirajayohamcc@gmail.com](mailto:shrirajayohamcc@gmail.com)**

**Email Subject:** `[SECURITY] Brief description of the vulnerability`

### 3. Provide detailed information

Include as much information as possible:

- **Type of vulnerability** (e.g., XSS, CSRF, SQL injection, rate limit bypass, etc.)
- **Location** (URL, file path, or function where the vulnerability exists)
- **Steps to reproduce** (detailed, step-by-step instructions)
- **Potential impact** (what could an attacker achieve?)
- **Proof of concept** (if applicable, provide code or screenshots)
- **Suggested fix** (if you have one)
- **Your contact information** (for follow-up questions)

**Example Report:**
```
Subject: [SECURITY] Rate Limit Bypass on Contact Forms

Type: Rate Limiting Bypass
Location: /app/api/contact/[task]/route.ts
Severity: Medium

Description:
I found a way to bypass the rate limiting by [detailed explanation]...

Steps to Reproduce:
1. Navigate to /contact
2. Submit a form
3. [specific steps]...

Potential Impact:
An attacker could spam the contact forms, leading to email flooding...

Proof of Concept:
[Code snippet or screenshot]

Suggested Fix:
Consider implementing [specific suggestion]...

Contact: your-email@example.com
```

### 4. Wait for our response

We aim to respond within **48 hours** with:
- Acknowledgment of your report
- Initial assessment of the vulnerability
- Expected timeline for a fix
- Any questions we may have

## Disclosure Policy

### Our Process

1. **Receipt & Acknowledgment** - We acknowledge your report within 48 hours
2. **Investigation** - We investigate and validate the vulnerability (1-7 days)
3. **Fix Development** - We develop and test a fix (varies by severity)
4. **Deployment** - We deploy the fix to production
5. **Disclosure** - We may publish details after the fix is deployed (with your permission)

### Timeline

- **Critical vulnerabilities** - Fixed within 24-48 hours
- **High severity** - Fixed within 1 week
- **Medium severity** - Fixed within 2-4 weeks
- **Low severity** - Fixed in next regular update

### Recognition

We believe in recognizing security researchers who help us improve:

- **Public acknowledgment** - We'll credit you (if desired) in our security hall of fame
- **Transparent communication** - We'll keep you updated throughout the process
- **Collaboration** - We may ask for your input on the fix

**Note:** We currently don't offer a bug bounty program, but we deeply appreciate your efforts!

## Security Best Practices for Contributors

If you're contributing to this project, please follow these security guidelines:

### Code Review Checklist

- [ ] No hardcoded secrets or API keys
- [ ] User inputs are validated with Zod schemas
- [ ] No SQL injection vulnerabilities (we use Sanity, but be cautious)
- [ ] No XSS vulnerabilities in dynamic content
- [ ] API routes have proper error handling
- [ ] Sensitive data is not logged
- [ ] CORS is properly configured
- [ ] Rate limiting is respected

### Environment Variables

- [ ] Never commit `.env.local` or `.env` files
- [ ] Document new environment variables in `.env.sample`
- [ ] Use `NEXT_PUBLIC_` prefix only for client-safe variables
- [ ] Keep server-side secrets without the `NEXT_PUBLIC_` prefix

### Dependencies

- [ ] Keep dependencies up to date
- [ ] Review dependency changes in pull requests
- [ ] Run `pnpm audit` before submitting PRs
- [ ] Avoid dependencies with known vulnerabilities

### API Development

- [ ] Validate all inputs with Zod
- [ ] Use TypeScript for type safety
- [ ] Handle errors gracefully without exposing internals
- [ ] Implement rate limiting for new endpoints
- [ ] Use proper HTTP status codes

## Known Security Considerations

### Current Limitations

1. **Rate Limiting Storage** - Currently uses in-memory cache (NodeCache)
   - **Limitation:** Resets on server restart
   - **Mitigation:** Acceptable for current scale; consider Redis for production scaling

2. **Email Service** - Uses Nodemailer with Gmail SMTP
   - **Consideration:** App passwords should be rotated regularly
   - **Mitigation:** Use environment variables, never commit credentials

3. **Sanity Studio Access** - CMS accessible at `/studio`
   - **Security:** Protected by Sanity's authentication
   - **Recommendation:** Ensure Sanity project has proper access controls

### Future Improvements

We're considering these security enhancements:

- [ ] Implementing CSP (Content Security Policy) headers
- [ ] Adding CAPTCHA to contact forms
- [ ] Migrating rate limiting to Redis/database for persistence
- [ ] Implementing automated security scanning in CI/CD
- [ ] Adding honeypot fields to forms
- [ ] Implementing request signing for API calls

## Security Updates

We regularly update our dependencies to patch security vulnerabilities:

```bash
# Check for vulnerabilities
pnpm audit

# Update dependencies
pnpm update

# Update Next.js
pnpm add next@latest react@latest react-dom@latest
```

## Additional Resources

- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
- [Sanity Security Documentation](https://www.sanity.io/docs/security)
- [Vercel Security](https://vercel.com/security)

## Contact

For security-related inquiries:
- **Email:** [shrirajayohamcc@gmail.com](mailto:shrirajayohamcc@gmail.com)
- **Subject Line:** Include `[SECURITY]` prefix

For general questions, use [GitHub Issues](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues).

---

**Last Updated:** November 2024

Thank you for helping keep the Shri Rajayoham Construction Company website and our users safe!
