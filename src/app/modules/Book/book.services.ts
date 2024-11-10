import prisma from "../../shared/prisma";

// create book into database
const createBookIntoDB = async (data: any) => {
  const result = await prisma.book.create({
    data,
  });
  return result;
};

// get all books from database
const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany({});
  return result;
};

// get single book from database
const getSingleBookFromDB = async (bookId: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });
  return result;
};

//  update book

const updateBookIntoDB = async (bookId: string, data: any) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });
  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data,
  });
  return result;
};

// delete book from database
const deleteBookFromDB = async (bookId: string) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });
  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
