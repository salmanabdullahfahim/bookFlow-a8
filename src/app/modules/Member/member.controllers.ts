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

export const MemberControllers = {
  createMember,
};
