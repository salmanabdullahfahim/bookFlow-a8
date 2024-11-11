import AppError from "../../shared/AppError";
import prisma from "../../shared/prisma";

const returnBook = async (data: any) => {
  const result = await prisma.$transaction(async (tx) => {
    // check if borrow record exists
    const borrow = await tx.borrowRecord.findUniqueOrThrow({
      where: {
        borrowId: data.borrowId,
      },
    });

    if (borrow.returnDate !== null) {
      throw new AppError("Book is already returned", 400);
    }

    // update book available copies
    await tx.book.update({
      where: {
        bookId: borrow.bookId,
      },
      data: {
        availableCopies: {
          increment: 1,
        },
      },
    });

    // update borrow record
    await tx.borrowRecord.update({
      where: {
        borrowId: data.borrowId,
      },
      data: {
        returnDate: new Date(),
      },
    });

    return borrow;
  });

  return result;
};

export const ReturnServices = {
  returnBook,
};
