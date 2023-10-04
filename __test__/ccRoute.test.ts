/**
 * Unit testing for charity controllers
 *
 * Test:
 *  - GET : receive JSON of all instances
 *  - GET : receive JSON info of the profile: username (and causes potentially)
 *  - POST: write a new charity instance
 *  - DELETE : deletes a charity instance row
 */


import request from 'supertest';
import { pool } from '../server/database/database';
import app from '../server/server';
import { describe, test, expect, it } from 'vitest';

describe('Charity Controller Tests', () => {
  describe('/ GET Charities ', () => {  
    it('should login a user', async () => {
        const testCredentials={
            username: 'AuthTest6',
            password: 'password'
        };
        const response = await request(app).post('/api/auth/login').send(testCredentials)
        expect(response.status).toBe(200)
      });
    }); 
  describe('/signup', () => {
    it('should write a new user into the DB', async () => {
      const signupCredentials = {
        username: 'AuthTest21',
        password: 'password'
      }
      const response = await request(app).post('/api/auth/signup').send(signupCredentials)
      expect(response.status).toBe(200)
      expect(response.header['set-cookie']).toBeDefined();
      const createQuery = `DELETE FROM users
      WHERE username = 'AuthTest21'`;
      await pool.query(createQuery);
    })
  })
});

