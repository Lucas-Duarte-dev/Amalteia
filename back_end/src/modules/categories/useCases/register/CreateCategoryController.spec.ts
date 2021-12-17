import request from 'supertest';
import {app} from "@infra/http/server";

describe('Create Category', () => {
   it('Should be able create a new category', async () => {
       const expected = 200;

       const response = await request(app)
           .post('/category')
           .send({
               name: 'ciência',
               description: 'Categoria com foco em ciencia'
           });

       expect(response.status).toEqual(expected);
   });


   it('Should no be able create a new categary with the same name', async () => {
       const expected = 403;

       const response = await request(app)
           .post('/category')
           .send({
               name: 'ciência',
               description: 'Categoria com foco em ciencia'
           });

       expect(response.status).toEqual(expected);
   })
});