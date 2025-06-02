"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// new instance from express app
const todosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../db/todo.json");
// New todo router
todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(data);
    res.json({
        message: "From todos Router!",
        data
    });
});
// CREATE todo
todosRouter.post("/create-todo", (req, res) => {
    // const data = req.body;
    // console.log(data)
    const { title, body } = req.body;
    res.send("Hello World!");
});
