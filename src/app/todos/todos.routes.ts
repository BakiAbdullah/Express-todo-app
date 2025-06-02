import express, { Request, Response } from 'express';
import fs from "fs"
import path from 'path';

// new instance from express app
const todosRouter = express.Router();

const filePath = path.join(__dirname, "../db/todo.json");

// New todo router
todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
console.log(data)
  res.json({
    message: "From todos Router!",
    data
  });
});

// CREATE todo
todosRouter.post("/create-todo", (req: Request, res: Response) => {
  // const data = req.body;
  // console.log(data)
  const { title, body } = req.body;
  res.send("Hello World!");
});