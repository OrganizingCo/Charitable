import express from 'express';
import { Request, Response } from 'express';
import { charityController } from '../controllers/charityController';
import { userController } from '../controllers/userController';

const charityRouter = express.Router();

charityRouter.get(
  '/',
  userController.checkCookie,
  charityController.getCharities,
  (_req: Request, res: Response) => {
    return res.status(200).json(res.locals.userCharities);
  }
);

charityRouter.post(
  '/delete', 
  // userController.checkCookie,
  charityController.deleteCharity,
  (_req: Request, res: Response) => {
    return res.status(200).send();
  }
);

charityRouter.post(
  '/',
  userController.checkCookie,
  charityController.addCharity,
  (_req: Request, res: Response) => {
    return res.status(200).json(res.locals.userCharities);
  }
);



export { charityRouter };
