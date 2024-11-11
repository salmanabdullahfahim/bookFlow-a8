import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { BorrowServices } from "./borrow.services";

const borrowBook = catchAsync(async (req, res) => {
  const result = await BorrowServices.borrowBook(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book borrowed successfully",
    data: {
      borrowId: result.borrowId,
      bookId: result.bookId,
      memberId: result.memberId,
      borrowDate: result.borrowDate,
    },
  });
});

export const BorrowControllers = {
  borrowBook,
};
