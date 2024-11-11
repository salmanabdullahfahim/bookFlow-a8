import express from "express";
import { AdminRoutes } from "../modules/Book/book.routes";
import { MemberRoutes } from "../modules/Member/memer.routes";

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
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
