# 🐘 Connect Drizzle to PostgreSQL

A **Next.js** starter project demonstrating how to connect and use **Drizzle ORM** with a **PostgreSQL** database, written in TypeScript.


## 🛠️ Tech Stack

- **Next.js** — React framework
- **Drizzle ORM** — Type-safe SQL ORM
- **PostgreSQL** — Database
- **TypeScript** — Primary language
- **Tailwind CSS** — Styling
- **Prisma** — Schema reference (included for comparison)


## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/abtin4079/connect-drizzle-to-postgresql.git
cd connect-drizzle-to-postgresql
npm install
```

### 2. Configure Environment

Edit the `.env` file with your PostgreSQL connection string:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/yourdb
```

### 3. Run Migrations

```bash
npx drizzle-kit push
```

### 4. Start the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


## 📁 Structure

```
app/        # Next.js app router pages
db/         # Drizzle schema & database config
public/     # Static assets
drizzle.config.ts   # Drizzle configuration
```


👤 **Author:** [abtin4079](https://github.com/abtin4079)
