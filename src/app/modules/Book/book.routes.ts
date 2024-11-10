import express from "express";
import { BookControllers } from "./book.controllers";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.getAllBooks);
router.get("/:bookId", BookControllers.getSingleBook);
router.put("/:bookId", BookControllers.updateBook);

export const AdminRoutes = router;
