import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { BookServices } from "./book.services";
import { StatusCodes } from "http-status-codes";

// create book
const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBookIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

// get all books
const getAllBooks = catchAsync(async (req, res) => {
  const result = await BookServices.getAllBooksFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

//get single book
const getSingleBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await BookServices.getSingleBookFromDB(bookId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

// update book

const updateBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await BookServices.updateBookIntoDB(bookId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
};
