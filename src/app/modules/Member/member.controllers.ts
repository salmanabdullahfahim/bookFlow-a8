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

// update member
const updateMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberServices.updateMemberIntoDB(memberId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member updated successfully",
    data: {
      memberId: result.memberId,
      name: result.name,
      email: result.email,
      phone: result.phone,
    },
  });
});

// delete member
const deleteMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberServices.deleteMemberFromDB(memberId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member successfully deleted",
  });
});

export const MemberControllers = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
