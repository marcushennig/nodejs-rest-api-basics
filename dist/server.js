"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userService_1 = require("./app/userService");
// Build a new rest controller that wraps the user
// service
let controller = express();
let userService = new userService_1.UserService();
controller.get('/user', (req, res) => res.end(JSON.stringify(userService.getCurrentUser())));
controller.listen(3000);
//# sourceMappingURL=server.js.map