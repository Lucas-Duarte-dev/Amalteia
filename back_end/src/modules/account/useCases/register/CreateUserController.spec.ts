import request from 'supertest';
import {app} from "@infra/http/server";
import {created} from "@core/infra/HttpResponse";

describe('Create User', () => {
    it('Should be able create a new user', async () => {
        const expected = 201;

        const response = await request(app)
            .post('/account')
            .send({
                name: 'Lucas Test',
                email: 'test@example.com',
                password: '123456',
            });

        expect(response.status).toEqual(expected);
    });

    it('Should not be able create a new user with the same email', async () => {
        const expected = 403;

        const response = await request(app)
            .post('/account')
            .send({
                name: 'Jorge Test',
                email: 'test@example.com',
                password: '123456',
            });

        expect(response.status).toEqual(expected);
    })

})