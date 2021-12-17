import request from 'supertest';
import {app} from "@infra/http/server";

describe('Authenticate', () => {
   beforeEach(async () => {
      await request(app).post('/account').send({
          name: 'Lucas Test',
          email: 'test@example.com',
          password: '123456',
      })
   });

   it('Should be able authenticate one user with email and password valid', async () => {
       const expected = 200;

       const response = await request(app)
            .post('/account/auth')
            .send({
                email: 'test@example.com',
                password: '123456'
            });

       expect(response.status).toEqual(expected);
       expect(response.body).toHaveProperty('token');
   });

   it('Should not be able authenticate a user with email incorrectly', async () => {
       const expected = 401;

       const response = await request(app)
           .post('/account/auth')
           .send({
               email: 'test@.com',
               password: '123456'
           });

       expect(response.status).toEqual(expected);
   });

    it('Should no be able authenticate a user with password incorrectly', async () => {
        const expected = 401;

        const response = await request(app)
            .post('/account/auth')
            .send({
                email: 'test@example.com',
                password: '1'
            });

        expect(response.status).toEqual(expected);
    });
});