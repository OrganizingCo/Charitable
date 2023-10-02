/**
 * Unit testing for charity controllers
 *
 * Test:
 *  - GET : receive JSON of all instances 
 *  - GET : receive JSON info of the profile: username (and causes potentially)
 *  - POST: write a new charity instance 
 *  - DELETE : deletes a charity instance row
 */

//import pool from "../server/database/database";
import fs  from 'fs';
import path from 'path';
import request from 'supertest'
import { describe, test, expect } from 'vitest';
const server:string = 'http://localhost:3000';



describe('Route integration', () => {

    // describe('/', () => {
    //   describe('GET', () => {
    //     // Note that we return the evaluation of `request` here! It evaluates to
    //     // a promise, so Jest knows not to say this test passes until that
    //     // promise resolves. See https://jestjs.io/docs/en/asynchronous
    //     it('responds with 200 status and text/html content type', () => {
    //       return request(server)
    //         .get('/')
    //         .expect('Content-Type', /text\/html/)
    //         .expect(200);
    //     });
    //   });
    // });
  
    // describe('/markets', () => {
    //   describe('GET', () => {
    //     it('responds with 200 status and application/json content type', () => {
    //       return request(server)
    //         .get('/markets')
    //         .expect('Content-Type', /json/)
    //         .expect(200);
    //     });
  
    //     // For this test, you'll need to inspect the body of the response and
    //     // ensure it contains the markets list. Check the markets.dev.json file
    //     // in the dev database to get an idea of what shape you're expecting.
    //     it('markets from "DB" json are in body of response', async () => {
    //       const response = await request(server).get('/markets');
  
    //       expect(response.body).toBeInstanceOf(Array);
    //       response.body.forEach((e) => {
    //         expect(e).toHaveProperty('location');
    //         expect(e).toHaveProperty('cards');
    //       });
    //     });
    //   });
  
    //   describe('PUT', () => {
    //     const newMarket = [{ location: 'texas', cards: 0 }];
    //     it('responds with 200 status and application/json content type', () => {
    //       return request(server)
    //         .put('/markets')
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .send(newMarket);
    //     });
  
    //     it('responds with the updated market list', async () => {
    //       const response = await request(server).put('/markets').send(newMarket);
    //       expect(response.body).toEqual(newMarket);
    //     });
  
    //     it('responds to invalid request with 400 status and error message in body', async () => {
    //       const response = await request(server).put('/markets');
    //       expect(400);
    //       expect(response.body).toHaveProperty('error');
    //     });
    //   });
    // });
  });
  