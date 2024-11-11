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

export const BorrowServices = {
  borrowBook,
};
