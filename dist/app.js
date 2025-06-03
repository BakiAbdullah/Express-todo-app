"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./app/todos/todos.routes");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
// Services
exports.app.use("/todos", todos_routes_1.todosRouter);
exports.app.get("/", (req, res) => {
    res.send("Welcome to Todos App!");
});
exports.default = exports.app;
/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
