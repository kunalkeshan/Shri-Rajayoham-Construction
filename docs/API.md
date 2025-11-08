# API Documentation

## Table of Contents

- [Overview](#overview)
- [Base URL](#base-url)
- [Authentication](#authentication)
- [Rate Limiting](#rate-limiting)
- [Error Handling](#error-handling)
- [Contact Form Endpoints](#contact-form-endpoints)
  - [General Enquiry](#1-general-enquiry)
  - [Investor Relations](#2-investor-relations)
  - [Supplier/Vendor](#3-suppliervendor)
  - [Services Required](#4-services-required)
  - [Careers](#5-careers)
- [Request Examples](#request-examples)
- [Response Codes](#response-codes)
- [Testing the API](#testing-the-api)

---

## Overview

The SRCC website provides a set of RESTful API endpoints for handling contact form submissions. All endpoints implement rate limiting, input validation, and email forwarding functionality.

**Key Features:**
- **Input Validation** - All inputs validated with Zod schemas
- **Rate Limiting** - IP-based rate limiting per form type
- **Email Forwarding** - Submissions sent via Nodemailer to company email
- **Error Handling** - Detailed error messages with proper HTTP status codes

---

## Base URL

### Development
```
http://localhost:3000/api
```

### Production
```
https://shrirajayohamcc.com/api
```

---

## Authentication

Currently, the API endpoints **do not require authentication** as they are public-facing contact forms. However, they implement rate limiting to prevent abuse.

**Security Measures:**
- IP-based rate limiting
- Input validation
- Email verification
- CORS configuration

---

## Rate Limiting

### Configuration

Each form type has **separate rate limits**:

| Parameter | Value |
|-----------|-------|
| **Max Requests** | 3 per form type |
| **Time Window** | 1 hour (3600 seconds) |
| **Block Duration** | 24 hours after exceeding limit |
| **Tracking Method** | IP address + form type |

### Rate Limit Behavior

1. **First 3 requests** - Accepted and processed
2. **4th request within 1 hour** - Rejected with rate limit error
3. **After exceeding limit** - IP blocked for 24 hours for that specific form
4. **Other forms** - Remain accessible (separate counters)

### Rate Limit Headers

The API currently does not return rate limit headers, but you can track your usage through error responses.

**Potential Future Enhancement:**
```
X-RateLimit-Limit: 3
X-RateLimit-Remaining: 2
X-RateLimit-Reset: 1699564800
```

---

## Error Handling

### Error Response Format

```typescript
{
  message: string;          // Error message code
  data?: {                  // Optional error details
    formType?: string;
    remainingTime?: number;
    maxRequests?: number;
    // ... other context
  }
}
```

### Common Error Messages

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| `contact/invalid-task` | 400 | Invalid form type in URL |
| `contact/invalid-body-content` | 400 | Request body validation failed |
| `contact/rate-limit-exceeded` | 429 | Too many requests within time window |
| `contact/ip-blocked` | 429 | IP address blocked for 24 hours |
| `Internal Server Error` | 500 | Server-side error occurred |

---

## Contact Form Endpoints

### Validation Schema (Common to All Forms)

All endpoints use this base validation schema:

```typescript
{
  name: string;         // 2-20 characters
  email: string;        // Valid email format
  phoneNumber: string;  // Indian format: +91XXXXXXXXXX or 10 digits starting with 6-9
  message: string;      // 3-500 characters
  address?: string;     // Optional, 3+ characters
  pinCode?: string;     // Optional, 6-digit Indian PIN code
}
```

**Phone Number Regex:**
```regex
^(?:\+91)?\s*[6789]\d{9}$
```

**PIN Code Regex:**
```regex
^[1-9][0-9]{5}$
```

---

### 1. General Enquiry

Submit a general enquiry or question.

**Endpoint:**
```
POST /api/contact/enquiry
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phoneNumber": "+919876543210",
  "pinCode": "600001",
  "message": "I would like to know more about your services."
}
```

**Success Response (201):**
```json
{
  "message": "contact/enquiry-email-sent-successfully"
}
```

**Email Format:**
```
Subject: John Doe contacting via enquiry form.

Name: John Doe
Email: john.doe@example.com
Phone Number: +919876543210
Pin Code: 600001
Query: I would like to know more about your services.
```

---

### 2. Investor Relations

For investment-related inquiries.

**Endpoint:**
```
POST /api/contact/investor-relations
```

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@investments.com",
  "phoneNumber": "9876543210",
  "message": "Interested in investment opportunities with SRCC."
}
```

**Success Response (201):**
```json
{
  "message": "contact/investor-relations-email-sent-successfully"
}
```

**Email Format:**
```
Subject: Jane Smith contacting via investor relations form.

Name: Jane Smith
Email: jane.smith@investments.com
Phone Number: 9876543210
Message: Interested in investment opportunities with SRCC.
```

---

### 3. Supplier/Vendor

For suppliers and vendors to submit partnership proposals.

**Endpoint:**
```
POST /api/contact/supplier-vendor
```

**Request Body:**
```json
{
  "name": "ABC Construction Materials",
  "email": "contact@abcmaterials.com",
  "phoneNumber": "+919123456789",
  "message": "We supply high-quality cement and steel at competitive prices."
}
```

**Success Response (201):**
```json
{
  "message": "contact/supplier-vendor-email-sent-successfully"
}
```

**Email Format:**
```
Subject: ABC Construction Materials contacting via supplier vendor form.

Business Name: ABC Construction Materials
Business Email: contact@abcmaterials.com
Business Phone Number: +919123456789
Supply Details: We supply high-quality cement and steel at competitive prices.
```

---

### 4. Services Required

For users requesting specific services.

**Endpoint:**
```
POST /api/contact/services-required
```

**Request Body:**
```json
{
  "name": "Michael Johnson",
  "email": "michael@example.com",
  "phoneNumber": "9988776655",
  "address": "123 Main St, Chennai, Tamil Nadu",
  "message": "Need construction services for a 2000 sq ft residential building."
}
```

**Success Response (201):**
```json
{
  "message": "contact/services-required-email-sent-successfully"
}
```

**Email Format:**
```
Subject: Michael Johnson contacting via services required form.

Name: Michael Johnson
Email: michael@example.com
Phone Number: 9988776655
Address: 123 Main St, Chennai, Tamil Nadu
Message: Need construction services for a 2000 sq ft residential building.
```

---

### 5. Careers

For job applications and career inquiries.

**Endpoint:**
```
POST /api/contact/careers
```

**Request Body:**
```json
{
  "name": "Sarah Williams",
  "email": "sarah.williams@example.com",
  "phoneNumber": "+919876543210",
  "message": "Applying for the Civil Engineer position. 5 years of experience in construction."
}
```

**Success Response (201):**
```json
{
  "message": "contact/careers-email-sent-successfully"
}
```

**Email Format:**
```
Subject: Sarah Williams contacting via careers form.

Name: Sarah Williams
Email: sarah.williams@example.com
Phone Number: +919876543210
Message: Applying for the Civil Engineer position. 5 years of experience in construction.
```

---

## Request Examples

### JavaScript (Fetch API)

```javascript
async function submitEnquiry(formData) {
  try {
    const response = await fetch('/api/contact/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    console.log('Success:', data.message);
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Usage
const formData = {
  name: 'John Doe',
  email: 'john@example.com',
  phoneNumber: '+919876543210',
  pinCode: '600001',
  message: 'Hello, I have a question.',
};

submitEnquiry(formData);
```

### TypeScript (Axios)

```typescript
import axios, { AxiosError } from 'axios';

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  address?: string;
  pinCode?: string;
}

interface ApiResponse {
  message: string;
  data?: Record<string, any>;
}

async function submitContactForm(
  task: 'enquiry' | 'investor-relations' | 'supplier-vendor' | 'services-required' | 'careers',
  formData: ContactFormData
): Promise<ApiResponse> {
  try {
    const response = await axios.post<ApiResponse>(
      `/api/contact/${task}`,
      formData
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Request failed');
    }
    throw error;
  }
}

// Usage
submitContactForm('enquiry', {
  name: 'John Doe',
  email: 'john@example.com',
  phoneNumber: '9876543210',
  message: 'Inquiry about services',
  pinCode: '600001',
});
```

### cURL

```bash
# General Enquiry
curl -X POST https://shrirajayohamcc.com/api/contact/enquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phoneNumber": "+919876543210",
    "pinCode": "600001",
    "message": "I would like more information about your projects."
  }'

# Investor Relations
curl -X POST https://shrirajayohamcc.com/api/contact/investor-relations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Investor",
    "email": "jane@investments.com",
    "phoneNumber": "9876543210",
    "message": "Interested in funding opportunities."
  }'
```

---

## Response Codes

### Success Codes

| Code | Description |
|------|-------------|
| **201 Created** | Form submitted successfully and email sent |

### Client Error Codes

| Code | Description |
|------|-------------|
| **400 Bad Request** | Invalid request body or task parameter |
| **429 Too Many Requests** | Rate limit exceeded or IP blocked |

### Server Error Codes

| Code | Description |
|------|-------------|
| **500 Internal Server Error** | Server-side error (email sending failed, etc.) |

---

## Error Response Examples

### Validation Error (400)

```json
{
  "message": "contact/invalid-body-content",
  "data": {
    "issues": [
      {
        "path": ["email"],
        "message": "Invalid email address."
      }
    ]
  }
}
```

### Rate Limit Exceeded (429)

```json
{
  "message": "contact/rate-limit-exceeded",
  "data": {
    "formType": "enquiry",
    "maxRequests": 3,
    "windowMs": 3600000
  }
}
```

### IP Blocked (429)

```json
{
  "message": "contact/ip-blocked",
  "data": {
    "formType": "enquiry",
    "remainingTime": 82800,
    "blockDuration": 86400000
  }
}
```

### Invalid Task (400)

```json
{
  "message": "contact/invalid-task"
}
```

---

## Testing the API

### Using Postman

1. **Set Request Type:** POST
2. **URL:** `http://localhost:3000/api/contact/enquiry`
3. **Headers:**
   ```
   Content-Type: application/json
   ```
4. **Body (JSON):**
   ```json
   {
     "name": "Test User",
     "email": "test@example.com",
     "phoneNumber": "9876543210",
     "pinCode": "600001",
     "message": "This is a test message."
   }
   ```
5. **Send Request**

### Rate Limit Testing

To test rate limiting:

1. Send 3 successful requests
2. 4th request should fail with rate limit error
3. Wait 1 hour or use a different IP/form type
4. After 4 failed attempts, IP will be blocked for 24 hours

**Note:** Rate limit cache is in-memory and resets on server restart in development.

### Testing Different Forms

```bash
# Test all form types
for task in enquiry investor-relations supplier-vendor services-required careers; do
  curl -X POST http://localhost:3000/api/contact/$task \
    -H "Content-Type: application/json" \
    -d '{
      "name": "Test User",
      "email": "test@example.com",
      "phoneNumber": "9876543210",
      "message": "Testing '$task' form."
    }'
  echo "\n"
done
```

---

## Implementation Details

### Email Configuration

The API uses **Nodemailer** with Gmail SMTP:

```typescript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});
```

**Required Environment Variables:**
- `NODEMAILER_EMAIL` - Gmail address
- `NODEMAILER_PASSWORD` - Gmail app password (not regular password)

### IP Detection

The API detects user IP from these headers (in order):

1. `x-forwarded-for` (first IP in list)
2. `cf-connecting-ip` (Cloudflare)
3. `x-real-ip` (Nginx)
4. Defaults to `'unknown'`

### Rate Limiting Implementation

```typescript
// Separate caches for each form type
const requestTrackers: Record<ContactFormTaskType, NodeCache>;
const blockedIPs: Record<ContactFormTaskType, NodeCache>;

// Check if IP is blocked for specific form
isIPBlocked(ip, formType);

// Increment counter for specific form
incrementRateLimit(ip, formType);
```

---

## Future Enhancements

Planned improvements to the API:

- [ ] **Rate Limit Headers** - Return X-RateLimit headers in responses
- [ ] **CAPTCHA Integration** - Add reCAPTCHA v3 for bot protection
- [ ] **Redis Integration** - Persistent rate limiting across server restarts
- [ ] **Webhook Support** - Alternative to email notifications
- [ ] **File Uploads** - Support for resume uploads in careers form
- [ ] **API Versioning** - `/api/v1/contact/...`
- [ ] **Request ID Tracking** - Unique ID for each request
- [ ] **Audit Logging** - Log all form submissions

---

## Security Considerations

### Input Sanitization

All inputs are validated with Zod schemas before processing:

```typescript
const commonSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^(?:\+91)?\s*[6789]\d{9}$/),
  message: z.string().min(3).max(500),
  pinCode: z.string().regex(/^[1-9][0-9]{5}$/).optional(),
  address: z.string().min(3).optional(),
});
```

### Email Injection Prevention

- Uses Nodemailer's built-in sanitization
- Sets `replyTo` header to user's email
- `from` header always uses server email

### Error Information Disclosure

- No stack traces in production
- Generic error messages for server errors
- Detailed validation errors for client errors

---

## Support

For API-related questions or issues:

- **GitHub Issues:** [Report an issue](https://github.com/kunalkeshan/Shri-Rajayoham-Construction/issues)
- **Email:** [shrirajayohamcc@gmail.com](mailto:shrirajayohamcc@gmail.com)
- **Documentation:** See [TROUBLESHOOTING.md](../TROUBLESHOOTING.md)

---

**Last Updated:** November 2024

For more information about the project architecture, see [ARCHITECTURE.md](./ARCHITECTURE.md).
