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

import request from 'supertest';
import { pool } from '../server/database/database';
import app from '../server/server';
import { describe, expect, it } from 'vitest';

describe('User Authentication Tests', () => {
  describe('/login', () => {
      it('should login a user', async () => {
        const testCredentials={
            username: 'AuthTest6',
            password: 'password'
        };
        const response = await request(app).post('/api/auth/login').send(testCredentials)
        expect(response.status).toBe(200)
      });
      it('should return an error when the password /username is incorrect', async () => {
        const testCredentials={
            username: 'AuthTest6',
            password: 'wrongPassword'
        };
        const response = await request(app).post('/api/auth/login').send(testCredentials)
        expect(response.status).toBe(401)
      });

      it('should return a cookie', async () => {
        const testCredentials={
            username: 'AuthTest6',
            password: 'password'
        };
        const response = await request(app).post('/api/auth/login').send(testCredentials)
        expect(response.status).toBe(200)
        expect(response.header['set-cookie']).toBeDefined();
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

  describe('/logout', () => {
    it('should delete the session cookie', async () => {
      const signinCredentials = {
        username: 'AuthTest6',
        password: 'password'
      }
       await request(app).post('/api/auth/login').send(signinCredentials)
      const logout = await request(app).get('/api/auth/logout')
      expect(logout.status).toBe(200)
      expect(logout.headers['set-cookie']).not.toContain('ssid');;
    })
  })



});