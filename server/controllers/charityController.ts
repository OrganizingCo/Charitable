import { NextFunction, Request, Response } from 'express';
import { pool } from '../database/database';
type charityInputsType = {
  campaign_name: string;
  campaign_url: string;
  campaign_description: string;
  campaign_type: string;
};
const charityController = {
  getCharities: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user_id = req.cookies.ssid;
      const queryCharity = `SELECT campaign_id, campaign_name, campaign_url, campaign_description, campaign_type FROM public.charities WHERE user_id = $1`;
      const charities = await pool.query(queryCharity, [user_id]);
      res.locals.userCharities = charities.rows;
      return next();
    } catch (err) {
      return next(err);
    }
  },

  addCharity: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const {
        campaign_name,
        campaign_url,
        campaign_description,
        campaign_type,
      }: charityInputsType = req.body;
      const addCharityQuery = `INSERT INTO charities ( user_id, campaign_name, campaign_url, campaign_description, campaign_type ) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
      const user_id = req.cookies.ssid;
      const addCharityInputs = [
        user_id,
        campaign_name,
        campaign_url,
        campaign_description,
        campaign_type,
      ];
      const addCharityQueryResponse = await pool.query(addCharityQuery, addCharityInputs);
      res.locals.addedCharity = addCharityQueryResponse.rows;
      console.log('addedCharity', res.locals.addedCharity);
      return next(); 
    } catch (err) {
      return next(err);
    }
  },

  deleteCharity: async (
    req: Request,
    _res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.body; 
      const deleteCharityQuery = `DELETE FROM charity WHERE campaign_id = ${id}`;
      await pool.query(deleteCharityQuery);
      return next(); 
    } catch (err) {
      return next(err);
    }
  },

};

export { charityController };
