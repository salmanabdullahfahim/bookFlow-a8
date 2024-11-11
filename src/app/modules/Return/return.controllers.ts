import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ReturnServices } from "./return.services";

const returnBook = catchAsync(async (req, res) => {
  const result = await ReturnServices.returnBook(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book returned successfully",
  });
});

export const ReturnControllers = {
  returnBook,
};
