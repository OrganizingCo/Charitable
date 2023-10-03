import { NextFunction, Request, Response } from 'express';
import { pool } from '../database/database';

const userController = {
  login: async (
    req: Request,
    _res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      type reqType = { username: string; password: string };
      const { username, password }: reqType = req.body;
      const passwordQuery = 'SELECT user_id, username, password FROM public.users WHERE username = $1;';
      const passwordResult = await pool.query(passwordQuery, [username]);
      // passwordResult returns rows WHERE username = ${user}
      if (passwordResult.rows[0].password === password) {
        return next(); 
      } else {
        return next({
          log: `no username or password found from query`,
        status: 400,
        message: { err: 'incorrect password' },
        });
      }
    } catch (err) {
      return next({
        log: `Error occurred in userController login ${err}`,
        status: 500,
        message: { err: 'Middleware error in server' },
      });
    }
  },
};
export { userController };
