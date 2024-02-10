# Contributing Guide for SRCC Website

Welcome to the contributing guide for Shri Rajayoham Construction Company Website! This guide will walk you through the process of contributing to our project, which utilizes Sanity CMS for content management and Nodemailer for sending contact form submission data to the client's email.

## Prerequisites

Before you start contributing, please make sure you have the following environment variables set up in your `.env.local` file:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=

NODEMAILER_PASSWORD=
NODEMAILER_EMAIL=
```

- `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are required for connecting to the Sanity CMS.
- `NODEMAILER_PASSWORD` and `NODEMAILER_EMAIL` are required for configuring Nodemailer to send contact form submissions to the client's email.

## Setting Up Sanity CMS and Nodemailer

### Setting up Sanity CMS

To create a Sanity project, follow these steps:

1. Visit the [Sanity website](https://www.sanity.io/) and sign up for an account.
2. Once logged in, create a new project.
3. Note down the project ID and dataset name, which you'll need to set up the environment variables.

For more detailed instructions on setting up Sanity, refer to the [official documentation](https://www.sanity.io/docs).

### Creating an App Password for Gmail (Nodemailer Gmail Service)

To use Gmail as your email service with Nodemailer, you need to create an app password. Here's how:

1. Go to your Google Account settings.
2. Navigate to the Security section.
3. Under "Signing in to Google," select "App passwords" (you may need to enable two-factor authentication).
4. Generate a new app password for your Next.js application. Choose "Mail" as the app and "Other" as the device.
5. Copy the generated app password and use it as `NODEMAILER_PASSWORD` in your `.env.local` file.
6. Use your Gmail address as `NODEMAILER_EMAIL` in the same file.

For detailed instructions, you can refer to the [Google documentation](https://support.google.com/accounts/answer/185833?hl=en).

## Contributing to the Project

Now that you have set up Sanity CMS and configured Nodemailer, you are ready to start contributing to our Next.js application! Here are some general guidelines to follow:

1. Fork the repository and clone it to your local machine.
2. Install dependencies by running `pnpm install`.
3. Make your changes or additions.
4. Test your changes locally to ensure they work as expected.
5. Commit your changes and push them to your fork.
6. Open a pull request to the main repository, describing your changes and referencing any relevant issues.

Thank you for your interest in contributing to our project! If you have any questions or need further assistance, feel free to reach out to us via GitHub issues or other communication channels provided in the project's documentation.
