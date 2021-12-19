import {CreateCategoryUseCase} from "@module/categories/useCases/register/CreateCategoryUseCase";
import {CategoryRepository} from "@module/categories/repositories/in-memory/CategoryRepository";


let categoryRepository = new CategoryRepository();
let createCategory: CreateCategoryUseCase;
let updateCategory: UpdateCategoryUseCase;

describe('Update Category', () => {

    beforeEach(async () => {
        categoryRepository = CategoryRepository.getInstance();

        createCategory = new CreateCategoryUseCase(categoryRepository);

        updateCategory = new UpdateCategoryUseCase();
    });

   it('Should be able change category name', async () => {
       const expected = 'biologia';

       const category = await updateCategory.execute(expected);

       expect(category.name).toEqual(expected);
   });
});