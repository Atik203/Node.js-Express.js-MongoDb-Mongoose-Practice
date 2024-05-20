import express, { NextFunction, Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World! This is a simple express app.");
});

export default app;
