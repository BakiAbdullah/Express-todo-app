"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const fs_1 = __importDefault(require("fs"));
exports.app.use(express_1.default.json());
// Making instance of app router
const todosRouter = express_1.default.Router();
const userRouter = express_1.default.Router();
// Services
exports.app.use("/todos", todosRouter);
exports.app.use('/users', userRouter);
exports.app.get("/", (req, res) => {
    res.send("Welcome to Todos App!");
});
//& GET all todo
exports.app.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(data);
    res.json({
        message: "From todos Router!",
        data
    });
});
exports.default = exports.app;
/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
