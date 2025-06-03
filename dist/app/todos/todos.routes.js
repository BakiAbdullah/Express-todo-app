"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// new instance from express app >>>>>>>>>>>
exports.todosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
// New todo router >>>>>>>>>>>
exports.todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(data);
    res.json({
        message: "From todos Router!",
        data
    });
});
// CREATE todo router >>>>>>>>>>>
exports.todosRouter.post("/create-todo", (req, res) => {
    const db = yield client.db("TodosDB");
    const collection = yield db.collection("todos").insertOne({
        title: "MongoDB",
        body: "MongoDB"
    });
    // Titile
    // description
    // priority : High, med, low
    // isCompleted: true
    // const data = req.body;
    const { title, body } = req.body;
    res.send("Hello World!");
});
// GET single todo by title >>>>>>>>>>>
exports.todosRouter.get('/:title', (req, res) => {
    const { title, body } = req.body;
    res.send("Hello World!");
});
// UPDATE todo by title >>>>>>>>>>>
exports.todosRouter.put('/update-todo/:title', (req, res) => {
    const { title, body } = req.body;
    res.send("Hello World!");
});
// DELETE todo by title >>>>>>>>>>>
exports.todosRouter.delete('/delete-todo/:title', (req, res) => {
    const { title, body } = req.body;
    res.send("Hello World!");
});
