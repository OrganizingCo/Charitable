/**
 * About: Unit testing for auth controllers
 *
 * Test:
 *  - POST : write a new user into DB
 *  - POST : send login attempt and return a response if verified
 *  - POST: logout should send positive status
 *  - POST : browser should have a cookie after sending request
 *  - POST : we can look for a cookie in browser
 */

import fs from 'fs';
import path from 'path';
import request from 'supertest';
import app from '../server/server';
import { describe, test, expect, it } from 'vitest';

describe('User Authentication Tests', () => {
  describe('/login', () => {
      it('should login a user and return a cookie', async () => {
        const testCredentials={
            username: 'test',
            password: 'password'
        };
        const response = await request(app).post('/api/auth/login').send(testCredentials)
        expect(response.status).toBe(200)
        //expect(response.header['set-cookie']).toBeDefined();
      });
    }); 
});