## Description

<!-- Provide a clear and concise description of your changes -->

## Type of Change

<!-- Mark the relevant option with an "x" -->

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement
- [ ] Dependency update
- [ ] Configuration change

## Related Issues

<!-- Link to related issues using #issue_number -->

Closes #
Related to #

## Changes Made

<!-- List the specific changes made in this PR -->

-
-
-

## Screenshots / GIFs

<!-- If applicable, add screenshots or GIFs to demonstrate UI changes -->

**Before:**

**After:**

## Testing Performed

<!-- Describe the tests you ran to verify your changes -->

- [ ] Tested locally with `pnpm dev`
- [ ] Tested production build with `pnpm build && pnpm start`
- [ ] Ran linter with `pnpm lint`
- [ ] Tested on multiple browsers (Chrome, Firefox, Safari)
- [ ] Tested responsive design on different screen sizes
- [ ] Verified accessibility (keyboard navigation, screen readers)

**Test Cases:**

1.
2.
3.

## Checklist

<!-- Mark completed items with an "x" -->

### Code Quality

- [ ] My code follows the project's coding standards
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings or errors
- [ ] I have used meaningful variable and function names

### TypeScript

- [ ] All new code is properly typed (no `any` types unless necessary)
- [ ] Type definitions updated in `@types/index.d.ts` if needed
- [ ] No TypeScript errors (`pnpm tsc --noEmit`)

### Documentation

- [ ] I have updated the README.md if needed
- [ ] I have updated relevant documentation in `docs/` if needed
- [ ] I have added/updated code comments where appropriate
- [ ] I have updated the TROUBLESHOOTING.md if fixing a common issue

### Testing

- [ ] I have tested my changes in development mode
- [ ] I have tested the production build
- [ ] All existing tests pass (if applicable)
- [ ] I have added tests for new features (if applicable)

### Sanity CMS (if applicable)

- [ ] Schema changes are backward compatible
- [ ] I have tested content creation/editing
- [ ] GROQ queries are optimized
- [ ] Image handling is optimized

### Accessibility

- [ ] New components use semantic HTML
- [ ] Interactive elements are keyboard accessible
- [ ] ARIA labels added where needed
- [ ] Color contrast meets WCAG AA standards

### Performance

- [ ] Images are optimized and use Next.js Image component
- [ ] No unnecessary re-renders
- [ ] Client components are only used when necessary
- [ ] Heavy components use dynamic imports if needed

### Security

- [ ] No sensitive data is exposed (API keys, passwords, etc.)
- [ ] Input validation is implemented for forms
- [ ] No security vulnerabilities introduced
- [ ] Environment variables are properly configured

## Breaking Changes

<!-- If this PR includes breaking changes, describe them and migration steps -->

**Breaking Changes:**

**Migration Steps:**

## Additional Notes

<!-- Any additional information that reviewers should know -->

## Deployment Notes

<!-- Special instructions for deployment, if any -->

- [ ] Requires new environment variables
- [ ] Requires Sanity schema migration
- [ ] Requires database changes
- [ ] Requires DNS/domain changes

**Environment Variables Needed:**

```env
# Add any new environment variables here
```

---

## For Reviewers

<!-- Notes specifically for code reviewers -->

**Areas to Focus On:**

**Questions for Reviewers:**

---

## Post-Merge Tasks

<!-- Tasks to complete after merging -->

- [ ] Update documentation website (if applicable)
- [ ] Announce changes in discussions/social media
- [ ] Monitor error logs for new issues
- [ ] Update related issues/PRs
