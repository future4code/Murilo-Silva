import express from "express"
import { UserController } from "../controller/UserController";

export const postRouter = express.Router();
const userController = new UserController();

postRouter.post("/signUp", userController.signUp);
postRouter.post("/login")