import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes/route";

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to BookFlow!!",
  });
});

// Routes
app.use("/api", router);

export default app;
