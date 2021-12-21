import request from 'supertest';
import {app} from "@infra/http/server";
import {ICategoryRepository} from "@module/categories/repositories/ICategoryRepository";
import {CreateCategoryUseCase} from "@module/categories/useCases/register/CreateCategoryUseCase";
import {CategoryRepository} from "@module/categories/repositories/in-memory/CategoryRepository";

let categoryRepository: ICategoryRepository;
let createCategory: CreateCategoryUseCase;

describe('Update Category Controller', () => {
    beforeAll(async () => {
        categoryRepository = CategoryRepository.getInstance();
        createCategory = new CreateCategoryUseCase(categoryRepository);

        await createCategory.execute({
            name: 'ciencia',
            description: 'Tema de ciencia'
        });
    })

    it('Should be able update a category name', async () => {
        const expected = 200;
        const expectedName = 'biologia';

        const response = await request(app)
            .put('/category')
            .send({
                old_name: 'ciencia',
                new_name: "biologia"
            });

        expect(response.status).toEqual(expected);
        expect(response.body.name).toEqual(expectedName);
    });

    it('Should not be able change category name when category not exists', async () => {
        const expected = 403;

        const response = await request(app)
            .put('/category')
            .send({
                old_name: 'test',
               new_name: 'ciencia'
            });

        expect(response.status).toEqual(expected);
    });

});