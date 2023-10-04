import express from 'express';
import {Request, Response} from 'express';
import {charityController} from "../controllers/charityController"
import { userController } from '../controllers/userController';

const charityRouter = express.Router();
// userController.checkCookie,
charityRouter.get('/', charityController.getCharities, (_req: Request, res: Response) => {
  return res.status(200).json(res.locals.userCharities);
})

charityRouter.post('/', userController.checkCookie, charityController.addCharity, (_req: Request, res: Response) => {
  return res.status(200).json(res.locals.userCharities);
})


export {charityRouter}; 