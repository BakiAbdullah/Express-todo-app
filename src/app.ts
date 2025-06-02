import express, { Application, Request, Response } from "express";
export const app: Application = express();
import fs from "fs";
import path from "path";

app.use(express.json());

// Making instance of app router
const todosRouter = express.Router();
const userRouter = express.Router();

// Services
app.use("/todos", todosRouter);
app.use('/users', userRouter)






app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todos App!");
});

//& GET all todo
app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(data)
  res.json({
    message: "From todos Router!",
    data
  });
});



export default app;

/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
