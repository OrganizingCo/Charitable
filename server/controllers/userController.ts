import { NextFunction, Request, Response } from 'express';
import { pool } from '../database/database';
import bcrypt from 'bcryptjs';
const salt = 10;
type reqType = { username: string; password: string; bio: string };

const userController = {
  signup: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { username, password, bio }: reqType = req.body;
      if (username === undefined || password === undefined) {
        console.log('missing username or password');
        return next({
          log: `Error occurred in userController signup. Username or password undefined`,
          status: 400,
          message: { err: 'All fields require' },
        });
      }
      const hashedPassword = await bcrypt.hash(password, salt);
      // select entered username from database to check duplicates
      const usernameQuery = `SELECT * FROM users WHERE username = $1`;
      const existingUser = [username];
      const usernameResult = await pool.query(usernameQuery, existingUser);
      if (usernameResult.rows[0]) {
        return next({
          log: `Error occurred in signup `,
          status: 409,
          message: { err: 'Username Already Exists' },
        });
      } else {
        const createQuery = `INSERT INTO users ( username, password, bio ) VALUES ($1, $2, $3) RETURNING *`;
        const insert = [username, hashedPassword, bio];
        const createdQuery = await pool.query(createQuery, insert);
        res.locals.user_id = createdQuery.rows[0].user_id;
      }
      return next();
    } catch (err) {
      return next({
        log: `Error occurred in userController signup ${err}`,
        status: 500,
        message: { err: 'Middleware error in server' },
      });
    }
  },

  login: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { username, password }: reqType = req.body;
      const passwordQuery =
        'SELECT user_id, username, password FROM public.users WHERE username = $1;';
      const passwordResult = await pool.query(passwordQuery, [username]);
      const user = passwordResult.rows[0];
      if (passwordResult.rows.length === 0) {
        return next({ error: 'Invalid Username or Password' });
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return next({
          log: 'no password match',
          status: 401,
          error: 'Invalid Username or Password',
        });
      } else {
        res.locals.user_id = user.user_id;
        return next();
      }
    } catch (err) {
      return next({
        log: `Error occurred in userController login ${err}`,
        status: 500,
        message: { err: 'Middleware error in server' },
      });
    }
  },


  setCookie: async (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      res.cookie('ssid', res.locals.user_id, {
        maxAge: 12 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
      });
      return next();
    } catch (err) {
      return next({
        log: `Error occurred in setCookie ${err}`,
        status: 500,
        message: { err: 'Middleware error in server' },
      });
    }
  },

  checkCookie: async (
    req: Request,
    _res: Response,
    next: NextFunction
  ): Promise<void> => {
    if ('ssid' in req.cookies) {
      return next();
    } else {
      return next({
        log: `error in checkCookie`,
        status: 401,
        message: { err: 'User needs to be logged in' },
      });
    }
  },

};

export { userController };
