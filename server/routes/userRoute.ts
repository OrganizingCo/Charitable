import express from 'express';
import { Request, Response } from 'express';
import { userController } from '../controllers/userController';

const userRoute = express.Router();


userRoute.get(
  '/user', userController.checkCookie,
  userController.info,
  (_req: Request, res: Response) => {
    return res.status(200).json(res.locals.userInfo);
  }
)
userRoute.post(
  '/login',
  userController.login,
  userController.setCookie,
  (_req: Request, res: Response) => {
    return res.status(200).send();
  }
);


userRoute.post(
  '/signup',
  userController.signup, userController.setCookie,
  (_req: Request, res: Response) => {
    return res.status(200).send();
  }
);

userRoute.get('/logout', (req: Request, res: Response) => {
  return res.cookie('ssid', '', {expires: new Date(0), httpOnly: true, sameSite: 'none', secure: true } ).status(200).send('session ended');
})

export { userRoute };
