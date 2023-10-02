import { NextFunction, Request, Response } from "express";
import { pool } from "../database/userDatabase";

const charityController = {
    getCharities: async (req: Request, res: Response, next: NextFunction): Promise<void> => {  
      try {
        // pool.query for all charities where ID = userID 
        res.locals.userCharities = 'JSON object of users charities'
        return res.locals.userCharities;
      } catch (err) {
        return next(err);
      }
    }

};


export {charityController} ;