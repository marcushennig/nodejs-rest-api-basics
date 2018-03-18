import express = require('express')
import {UserService} from "./app/userService";

// Build a new rest controller that wraps the user
// service
let controller = express();
let userService = new UserService();

controller.get('/user', (req, res) => res.end(JSON.stringify(userService.getCurrentUser())));
controller.listen(3000);