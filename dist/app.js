"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
app.use(express_1.default.json());
// Making instance of app router
const todosRouter = express_1.default.Router();
const userRouter = express_1.default.Router();
// Services
app.use("/todos", todosRouter);
app.use('/users', userRouter);
// New todo router
todosRouter.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(data);
    res.json({
        message: "From todos Router!",
        data
    });
});
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.get("/", (req, res) => {
    res.send("Welcome to Todos App!");
});
//& GET all todo
app.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(data);
    res.json({
        message: "From todos Router!",
        data
    });
});
// CREATE todo
app.post("/todos/create-todo", (req, res) => {
    // const data = req.body;
    // console.log(data)
    const { title, body } = req.body;
    res.send("Hello World!");
});
exports.default = app;
/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
