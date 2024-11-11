import express from "express";
import { ReturnControllers } from "./return.controllers";

const router = express.Router();

router.post("/", ReturnControllers.returnBook);

export const ReturnRoutes = router;
