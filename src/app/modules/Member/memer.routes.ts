import express from "express";
import { MemberControllers } from "./member.controllers";

const router = express.Router();

router.post("/", MemberControllers.createMember);
router.get("/", MemberControllers.getAllMembers);
router.get("/:memberId", MemberControllers.getSingleMember);
router.put("/:memberId", MemberControllers.updateMember);
router.delete("/:memberId", MemberControllers.deleteMember);

export const MemberRoutes = router;
