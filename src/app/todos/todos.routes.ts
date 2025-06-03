import express, { Request, Response } from 'express';
import fs from "fs"
import path from 'path';
import { client } from '../../config/mongodb';

// new instance from express app >>>>>>>>>>>
export const todosRouter = express.Router();
const filePath = path.join(__dirname, "../../../db/todo.json");

// New todo router >>>>>>>>>>>
todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
console.log(data)
  res.json({
    message: "From todos Router!",
    data
  });
});

// CREATE todo router >>>>>>>>>>>
todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const db = await client.db("TodosDB");
  const collection = await db.collection("todos");

  collection.insertOne({
     title: "MongoDB",
     decription: "A nosql mastery database named MongoDB",
     priority: "High",
     isCompleted: false
  })
  
  const todos = collection.find({});
  
  
  
  // const { title, body } = req.body;
  res.send("Hello World!");
});

// GET single todo by title >>>>>>>>>>>
todosRouter.get('/:title', (req: Request, res: Response) => {
  const { title, body } = req.body;
  res.send("Hello World!");
})

// UPDATE todo by title >>>>>>>>>>>
todosRouter.put('/update-todo/:title', (req: Request, res: Response) => {
  const { title, body } = req.body;
  res.send("Hello World!");
})

// DELETE todo by title >>>>>>>>>>>
todosRouter.delete('/delete-todo/:title', (req: Request, res: Response) => {
  const { title, body } = req.body;
  res.send("Hello World!");
})