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

export const BookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
};
