import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import {charityRouter} from './routes/charityRoute';
import {userRoute} from './routes/userRoute'
import { ServerError } from '../types';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}
));
const PORT = process.env.PORT || 4000;

//routes
app.use('/api/auth', userRoute)
app.use('/api/charity', charityRouter)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(path.resolve(), "dist"))); 
    app.get("/*", function (_req, res) {                         
      return res.sendFile(path.join(path.resolve(), "dist", "index.html"));
    });
  } 
  
  app.use("*", (_req: Request, res: Response) => {
    return res.status(404).send("Invalid endpoint");
  });
  
  app.use((err: ServerError, _req: Request, res: Response) => {
    console.log('in the default error handler')
    const defaultErr: ServerError = {
      log: "Express error handler caught unknown middleware error",
      status: 500,
      message: { err: "An error occurred" },
    };
    console.log('default Err:', defaultErr);
    const errorObj: ServerError = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

 
  
  app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}...`);
  });
  
export default app; 