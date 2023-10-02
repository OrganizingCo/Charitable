import express from 'express';
import {Request, Response} from 'express';
import {charityController} from "../controllers/charityController"

const charityRouter = express.Router();

router.get('/', charityController.getCharities, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.userCharities);
})

export {charityRouter}; 