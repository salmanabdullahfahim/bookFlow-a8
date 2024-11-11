import prisma from "../../shared/prisma";

const createMemberIntoDB = async (data: any) => {
  const result = await prisma.member.create({
    data,
  });
  return result;
};

export const MemberServices = {
  createMemberIntoDB,
};
