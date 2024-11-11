import AppError from "../../shared/AppError";
import prisma from "../../shared/prisma";

const borrowBook = async (data: any) => {
  const result = await prisma.$transaction(async (tx) => {
    // check if book exists
    const book = await tx.book.findUniqueOrThrow({
      where: {
        bookId: data.bookId,
      },
    });

    if (book.availableCopies <= 0) {
      throw new AppError("Book is not available for borrowing", 400);
    }

    // check if member exists
    await tx.member.findUniqueOrThrow({
      where: {
        memberId: data.memberId,
      },
    });

    // create borrow record
    const borrow = await tx.borrowRecord.create({
      data: {
        bookId: data.bookId,
        memberId: data.memberId,
        borrowDate: new Date(),
      },
    });

    // update book available copies
    await tx.book.update({
      where: {
        bookId: data.bookId,
      },
      data: {
        availableCopies: book.availableCopies - 1,
      },
    });

    return borrow;
  });
  return result;
};

const getOverdueBorrowsService = async () => {
  const currentDate = new Date();
  const overdueDaysLimit = 14;

  const overdueBorrows = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: new Date(
          currentDate.getTime() - overdueDaysLimit * 24 * 60 * 60 * 1000
        ),
      },
    },
    include: {
      book: { select: { title: true } },
      member: { select: { name: true } },
    },
  });

  // Map to include overdue days and borrower/book information
  return overdueBorrows.map((borrow) => {
    const overdueDays = Math.floor(
      (currentDate.getTime() - borrow.borrowDate.getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return {
      borrowId: borrow.borrowId,
      bookTitle: borrow.book.title,
      borrowerName: borrow.member.name,
      overdueDays,
    };
  });
};

export const BorrowServices = {
  borrowBook,
  getOverdueBorrowsService,
};
