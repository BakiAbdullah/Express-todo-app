import express, { Application, Request, Response } from "express";
import { todosRouter } from "./app/todos/todos.routes";
export const app: Application = express();

app.use(express.json());

// Services
app.use("/todos", todosRouter);


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todos App!");
});


export default app;

/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
