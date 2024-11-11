import express from "express";
import { AdminRoutes } from "../modules/Book/book.routes";
import { MemberRoutes } from "../modules/Member/memer.routes";
import { BorrowRoutes } from "../modules/Borrow/borrow.routes";

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
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
