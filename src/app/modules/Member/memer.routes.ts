import express from "express";
import { MemberControllers } from "./member.controllers";

const router = express.Router();

router.post("/", MemberControllers.createMember);
router.get("/", MemberControllers.getAllMembers);
router.get("/:memberId", MemberControllers.getSingleMember);

export const MemberRoutes = router;
