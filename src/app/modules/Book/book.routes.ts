import express from "express";
import { BookControllers } from "./book.controllers";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.getAllBooks);

export const AdminRoutes = router;
