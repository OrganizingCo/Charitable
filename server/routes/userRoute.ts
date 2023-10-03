import express from 'express';
import {Request, Response} from 'express';
import {userController} from "../controllers/userController"


const userRoute = express.Router();

userRoute.post('/login', userController.login, (_req: Request, res: Response ) => {
  return res.status(200)
})


export {userRoute}