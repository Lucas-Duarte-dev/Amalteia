import {CreateCategoryUseCase} from "@module/categories/useCases/register/CreateCategoryUseCase";
import {CategoryRepository} from "@module/categories/repositories/in-memory/CategoryRepository";
import {UpdateCategoryUseCase} from "@module/categories/useCases/update/UpdateCategoryUseCase";


let categoryRepository = new CategoryRepository();
let createCategory: CreateCategoryUseCase;
let updateCategory: UpdateCategoryUseCase;

describe('Update Category', () => {

    beforeEach(async () => {
        categoryRepository = CategoryRepository.getInstance();

        createCategory = new CreateCategoryUseCase(categoryRepository);

        updateCategory = new UpdateCategoryUseCase(categoryRepository);

        await createCategory.execute({
            name: 'ciencia',
            description: 'tema de ciencia'
        });
    });

   it('Should be able change category name', async () => {
       const expected = 'biologia';

       const category = await updateCategory.execute('ciencia', expected);

       expect(category.name).toEqual(expected);
   });

   it('Should no be able change category name when old name passed not exist',() => {
       const expected = {message: 'Category not found', statusCode: 400};

       expect(async () => {
           await updateCategory.execute('artes', 'biologia');
       }).rejects.toEqual(expected);
   })
});