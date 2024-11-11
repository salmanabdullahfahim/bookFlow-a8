import express from "express";
import { BorrowControllers } from "./borrow.controllers";

const router = express.Router();

router.post("/", BorrowControllers.borrowBook);
router.get("/overdue", BorrowControllers.getOverdueBorrows);

export const BorrowRoutes = router;
