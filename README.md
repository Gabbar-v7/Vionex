# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```env
# Application
APP_URL=http://localhost:5173
LOGGER_LEVEL=info
SERVICE_NAME=web-app

# Database
POSTGRES_URL=https://database.com/database
MONGODB_URL=https://database.com/database

# Secrets
AUTH_SECRET=59CWLuDsF6IoWqnMqIUs4szQoKDsHAD7

GOOGLE_CLIENT_ID=1094866031365-2gkccxxx8k9l0m1.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-9xYxXyZzxxxxYzYzYzY

GITHUB_CLIENT_ID=Iv1.123456xxcbcdef
GITHUB_CLIENT_SECRET=1234567890abcdef1234XXX90abcdef1234

RAZORPAY_KEY=rzp_
RAZORPAY_SECRET=

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=true
SMTP_USER=me@example.com
SMTP_PASS=supersecretpassword
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
