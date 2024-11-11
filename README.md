# BookFlow

## Project Overview

BookFlow is a Library Management System API designed to help library staff and members manage books, authors, memberships, and borrowing activities. It provides essential CRUD operations for books, authors, members, and borrow records, with additional endpoints to handle book borrowing and returns. The system is built using Node.js, Express.js, and Prisma ORM, with PostgreSQL as the database.

## Live URL

> _(https://book-flow-dusky.vercel.app/)_

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

## Key Features & Functionality

### 1. Book Management

- **Add New Book**: Easily add new books to the library's collection with unique details like title, author, genre.
- **Update Book Details**: Edit information for existing books as needed.
- **Delete Book**: Remove books from the collection if they are no longer available.

### 2. Member Management

- **Add New Member**: Register new members with relevant details such as name, contact information, and membership status.
- **Update Member Details**: Modify member information as required.
- **Delete Member**: Remove members from the system when their membership expires or if they no longer use the library.

### 3. Borrow & Return Management

- **Borrow a Book**: Allow members to borrow available books, with records automatically tracking the borrow date and expected return date.
- **Return a Book**: Process book returns efficiently, marking the borrow record as returned and updating availability status.

### 4. Overdue Borrow Tracking

- **Overdue List**: Automatically track overdue books based on a 14-day borrowing limit.

### 5. Error Handling & Robustness

- **Global Error Handler**: Centralized error handling with status codes and error messages, ensuring stability and clear error reporting.
- **Validation**: Ensure data integrity through Prisma validation rules and request handling.

### 6. Modular Architecture

- **Service-Oriented Design**: Separation of concerns through distinct services, controllers, and routes for easier maintenance and scalability.
- **Prisma Integration**: Simplified data modeling and database queries using Prisma ORM with PostgreSQL, improving code readability and reducing boilerplate.
