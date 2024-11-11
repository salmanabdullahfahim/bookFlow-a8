import express from "express";
import { BorrowControllers } from "./borrow.controllers";

const router = express.Router();

router.post("/", BorrowControllers.borrowBook);

export const BorrowRoutes = router;
