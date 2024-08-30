import express, { Router } from "express";
import { getUsers } from "../controllers/userController.js";

const userRouter: Router = express.Router()


userRouter.get("/user/all", getUsers)


export default userRouter;