#  💰 AI Finance Platform
A full-stack, AI-powered personal finance platform built with Next.js, Prisma, Clerk, Gemini AI, Inngest, Arcjet, Tailwind, and Shadcn UI — featuring secure authentication, smart budgeting, recurring transactions, AI receipt scanning, automated email reports & alerts, and real-time dashboards.

# ⭐ Features

### 🔐 Authentication & Security
* Clerk authentication (Sign in / Sign up / Middleware protection)
* Arcjet bot protection + rate limiting
  
### 🧾 Accounts & Transactions
* Create/edit/delete accounts
* Update balances automatically
* Full transaction CRUD (income/expense)
* Sorting, filtering, pagination, bulk delete
* Recurring transactions

### 🤖 AI Integrations
* Receipt Scanner using Gemini Vision
* Monthly AI Reports with insights
* Auto-filled forms based on scanned receipts

### 📊 Dashboard & Visuals
* Income, expense, and net balance overview
* Date-range filters
* Pie charts (Recharts)
* Responsive UI with Tailwind + Shadcn

### 💸 Budget Tracking
* Set category budgets
* Live progress tracking
* Alerts when usage crosses thresholds
* Automated cron checks every 6 hours (Inngest)

### 📧 Automation & Emails
* Monthly financial report emails
* Budget limit alert emails
* Templates built using Resend

### 🗄️ Backend & Database
* Prisma ORM with PostgreSQL
* Atomic updates for accounts & transactions
* Server actions for secure backend logic

### 🚀 Deployment
* Vercel deployment
* Production-ready middleware & environment configs

# 🛠️ Tech Stack

* Frontend: Next.js • React • Tailwind • Shadcn UI
* Backend: Next.js Server Actions • Prisma • PostgreSQL
* AI: Gemini Vision + Text Models
* Auth: Clerk
* Security: Arcjet
* Background Jobs: Inngest
* Email: Resend

# 🏗️ Architecture Overview

* Next.js App Router for routing and server actions
* Prisma + PostgreSQL for scalable database management
* Clerk handles authentication and session management
* Arcjet middleware provides bot protection & rate limiting
* Gemini Vision extracts data from receipts (OCR)
* Inngest automates recurring jobs (budget checks, reports)
* Resend sends automated email alerts and monthly reports
* Server Actions ensure secure backend logic without exposing APIs

# 🚀 Setup

### 📥 Clone the Repository
```
git clone <repo>
cd project
npm install
```

### 🔑 Create .env
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
DATABASE_URL=
DIRECT_URL=
ARCJET_KEY=
RESEND_API_KEY=
GEMINI_API_KEY=
```

### 🗃️ Prisma Setup
```
npx prisma generate
npx prisma db push
```

### 🏃 Start
```
npm run dev
```

# 🌟 Key Highlights

* AI-powered finance features
* Enterprise-level authentication + rate limiting
* Automated background jobs
* Production-ready Next.js architecture
