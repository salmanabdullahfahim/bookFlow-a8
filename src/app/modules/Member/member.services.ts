import prisma from "../../shared/prisma";

// create member into database
const createMemberIntoDB = async (data: any) => {
  const result = await prisma.member.create({
    data,
  });
  return result;
};

// get all members from database
const getAllMembersFromDB = async () => {
  const result = await prisma.member.findMany({});
  return result;
};

// get Single member from database
const getSingleMemberFromDB = async (memberId: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });
  return result;
};

export const MemberServices = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
};
