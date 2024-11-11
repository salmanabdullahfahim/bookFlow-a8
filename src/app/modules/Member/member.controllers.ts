import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { MemberServices } from "./member.services";

// create Member
const createMember = catchAsync(async (req, res) => {
  const result = await MemberServices.createMemberIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

// get all members
const getAllMembers = catchAsync(async (req, res) => {
  const result = await MemberServices.getAllMembersFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

// get single member
const getSingleMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberServices.getSingleMemberFromDB(memberId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

export const MemberControllers = {
  createMember,
  getAllMembers,
  getSingleMember,
};
