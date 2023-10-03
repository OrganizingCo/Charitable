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
// import fs from 'fs';
// import path from 'path';
// import request from 'supertest';
// import { describe, test, expect, it } from 'vitest';
// const server: string = 'http://localhost:4000';

// describe('Charity Controller Tests', () => {
//   describe('/getCharities', () => {
//     describe('GET', () => {
//       it('should respond with a JSON and status 200', () => {
//         return request(server).get('/api/').expect('Content-Type', /text\/html/).expect(200);
//       });
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
