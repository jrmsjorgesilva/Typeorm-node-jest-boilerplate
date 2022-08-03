import { Router, Response, Request, request, response } from "express";
import createUserController from "../controllers/usersControllers/createUserController";

const usersRouter = Router();

usersRouter.post("/", createUserController.handle);

usersRouter.get("/", createUserController.handle);

export default usersRouter;
