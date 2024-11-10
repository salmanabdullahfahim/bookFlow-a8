import express from "express";
import { AdminRoutes } from "../modules/Book/book.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: AdminRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
