# Deployment Guide

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Deployment Options](#deployment-options)
  - [Vercel (Recommended - Cloud)](#vercel-recommended---cloud)
  - [Docker Compose (Self-Hosted)](#docker-compose-self-hosted)
  - [VM Deployment (Self-Hosted)](#vm-deployment-self-hosted)
- [Post-Deployment Configuration](#post-deployment-configuration)
- [Monitoring & Analytics](#monitoring--analytics)

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

## Deployment Options

### Vercel (Recommended - Cloud)

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

### Docker Compose (Self-Hosted)

Deploy using Docker and Docker Compose for containerized deployment.

#### Prerequisites

- **Docker** installed ([install](https://docs.docker.com/get-docker/))
- **Docker Compose** installed ([install](https://docs.docker.com/compose/install/))
- Source code cloned locally or on your server

#### Step 1: Clone Repository

```bash
git clone https://github.com/kunalkeshan/Shri-Rajayoham-Construction.git
cd Shri-Rajayoham-Construction
```

#### Step 2: Create Environment File

```bash
# Copy and edit environment variables
cp .env.sample .env.local
nano .env.local
```

Add your environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_app_specific_password
```

#### Step 3: Build Docker Image

```bash
# Build the Docker image (this runs the multi-stage build)
docker-compose build
```

This will:
1. Install dependencies (pnpm-lock.yaml)
2. Build the Next.js application
3. Create an optimized production image

#### Step 4: Run the Application

```bash
# Start the container
docker-compose up -d
```

The application will be available at `http://localhost:3000`

#### Step 5: Verify Deployment

```bash
# Check container status
docker-compose ps

# View logs
docker-compose logs -f app

# Test the application
curl http://localhost:3000
```

#### Managing the Container

```bash
# Stop the application
docker-compose down

# Restart the application
docker-compose restart

# View logs
docker-compose logs -f

# Rebuild and restart after code changes
docker-compose up -d --build
```

#### Environment Variables in Docker Compose

The `docker-compose.yml` file automatically loads variables from `.env.local`:

```yaml
environment:
  - NEXT_PUBLIC_SANITY_PROJECT_ID=${NEXT_PUBLIC_SANITY_PROJECT_ID}
  - NEXT_PUBLIC_SANITY_DATASET=${NEXT_PUBLIC_SANITY_DATASET}
  - NODEMAILER_EMAIL=${NODEMAILER_EMAIL}
  - NODEMAILER_PASSWORD=${NODEMAILER_PASSWORD}
```

Make sure all required variables are set in `.env.local` before running `docker-compose up`.

---

### VM Deployment (Self-Hosted)

Deploy on a Virtual Machine (AWS EC2, Google Cloud Compute Engine, or any Linux VM).

#### Prerequisites

- **Linux VM** with SSH access (Ubuntu 20.04 LTS or newer recommended)
- **Docker** and **Docker Compose** installed on the VM
- **Git** for cloning the repository

#### Step 1: Connect to Your VM

```bash
# SSH into your VM (example for EC2)
ssh -i your-key.pem ubuntu@your-vm-ip

# Update system packages
sudo apt update && sudo apt upgrade -y
```

#### Step 2: Install Docker and Docker Compose

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group (optional, for running without sudo)
sudo usermod -aG docker $USER
newgrp docker

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker --version
docker-compose --version
```

#### Step 3: Clone and Setup Project

```bash
# Create application directory
sudo mkdir -p /opt/srcc
cd /opt/srcc

# Clone the repository
sudo git clone https://github.com/kunalkeshan/Shri-Rajayoham-Construction.git .

# Create environment file
sudo nano .env.local
```

Add your environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_app_specific_password
```

#### Step 4: Build and Deploy

```bash
# Navigate to project directory
cd /opt/srcc

# Build the Docker image
sudo docker-compose build

# Start the application
sudo docker-compose up -d

# Verify the application is running
sudo docker-compose ps
```

#### Step 5: Verify Deployment

```bash
# Check if application is responding
curl http://localhost:3000

# View logs
sudo docker-compose logs -f app

# Check container health
sudo docker-compose ps
```

#### Updating the Deployment

```bash
# Pull latest code
cd /opt/srcc
sudo git pull origin main

# Rebuild and restart
sudo docker-compose up -d --build

# View logs to verify
sudo docker-compose logs -f app
```

#### Auto-Restart on VM Reboot

To ensure the application restarts automatically when the VM reboots:

```bash
# Enable Docker to start on boot
sudo systemctl enable docker

# Add a restart policy in docker-compose.yml (already configured)
# The compose file includes: restart: unless-stopped
```

#### Managing the Application

```bash
# Stop the application
sudo docker-compose down

# Restart the application
sudo docker-compose restart app

# View real-time logs
sudo docker-compose logs -f app

# Check resource usage
docker stats
```

---

## Post-Deployment Configuration

### 1. Update Sanity CORS Settings

After deploying to your production domain:

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **Settings** → **API**
4. Add your production URLs to CORS Origins:
   ```
   https://yourdomain.com
   https://www.yourdomain.com
   http://localhost:3000 (for development)
   ```

### 2. Test the Deployment

```bash
# Test homepage loads
curl https://yourdomain.com

# Verify Sanity content loads
curl https://yourdomain.com/projects

# Test contact form
# Visit https://yourdomain.com/contact and submit a test form
```

### 3. Verify Environment Variables (Docker)

For Docker deployments, verify variables are properly loaded:

```bash
# Check container environment (from host)
docker-compose exec app env | grep NEXT_PUBLIC

# View container logs
docker-compose logs app
```

### 4. Set Up Monitoring

- **Google Analytics:** Already configured in code - verify tracking in real-time
- **Docker Logs:** Monitor container logs: `docker-compose logs -f app`
- **Health Checks:** Docker Compose includes health checks - verify with `docker-compose ps`

---

## Monitoring & Analytics

### Google Analytics

The site includes GA4 tracking configured in the code. To verify:

1. Go to [Google Analytics](https://analytics.google.com/)
2. Check **Real-Time** reports after deployment
3. Visit your deployed site and verify page views appear

### Docker Container Monitoring

Monitor your Docker deployment:

```bash
# View real-time logs
docker-compose logs -f app

# Check container health status
docker-compose ps

# Monitor resource usage (CPU, memory)
docker stats

# Check for errors or warnings in logs
docker-compose logs app | grep -i error
```

### Vercel Deployment Monitoring

If using Vercel, monitoring is included:

1. Go to your Vercel project dashboard
2. Check **Analytics** tab for performance metrics
3. Review build logs for any warnings

---

## Security Checklist

Before going live:

- [ ] All environment variables are secure in `.env.local`
- [ ] Docker image uses non-root user (nextjs:nodejs)
- [ ] Sanity CORS is configured for production domain
- [ ] Gmail app password is unique and secure
- [ ] No secrets committed to git
- [ ] Rate limiting is working on contact forms
- [ ] Environment variables not exposed in Docker logs

---

**Last Updated:** December 2024
