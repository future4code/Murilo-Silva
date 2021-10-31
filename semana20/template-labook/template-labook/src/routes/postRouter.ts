import express from "express";

export const userRouter = express.Router();

userRouter.post("/signUp");
userRouter.post("/login")