# BookFlow

## Project Overview

BookFlow is a Library Management System API designed to help library staff and members manage books, authors, memberships, and borrowing activities. It provides essential CRUD operations for books, authors, members, and borrow records, with additional endpoints to handle book borrowing and returns. The system is built using Node.js, Express.js, and Prisma ORM, with PostgreSQL as the database.

## Live URL

> _(Add link here if deployed)_

## Technology Stack & Packages

- **Node.js**: Server runtime
- **Express.js**: Backend framework
- **Prisma ORM**: Database schema management and querying
- **PostgreSQL**: Relational database
- **TypeScript**: For typed JavaScript and better code management
- **UUID**: To ensure unique identification across all database entries

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/bookflow.git
   cd bookflow
   ```
2. **Install dependency**:

```bash
npm install

```

3. **Set Up Environment Variables**:

```bash
PORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/your_db_name?schema=public"
```

4. **Initialize Database**:

```bash
npx prisma migrate dev
```

5. **Run the Application**:

```bash
npm run dev
```
