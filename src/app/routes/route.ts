import express from "express";
import { AdminRoutes } from "../modules/Book/book.routes";
import { MemberRoutes } from "../modules/Member/member.routes";
import { BorrowRoutes } from "../modules/Borrow/borrow.routes";
import { ReturnRoutes } from "../modules/Return/return.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: AdminRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
  {
    path: "/borrow",
    route: BorrowRoutes,
  },
  {
    path: "/return",
    route: ReturnRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
