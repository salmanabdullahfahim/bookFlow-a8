import prisma from "../../shared/prisma";

const createBookIntoDB = async (data: any) => {
  const result = await prisma.book.create({
    data,
  });
  return result;
};

export const BookServices = {
  createBookIntoDB,
};
