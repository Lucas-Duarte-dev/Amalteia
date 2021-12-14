import {ICategoryRepository} from "@module/categories/repositories/ICategoryRepository";
import {Category} from "@module/categories/entity/Category";
import {CategoryRepository} from "@module/categories/repositories/in-memory/CategoryRepository";
import {CreateCategoryUseCase} from "@module/categories/useCases/register/CreateCategoryUseCase";

let createCategory: CreateCategoryUseCase;
let categoryRepository: ICategoryRepository;

let category: Category;

describe('Create Category', () => {
   beforeEach(() => {
        categoryRepository = new CategoryRepository();
        createCategory = new CreateCategoryUseCase(categoryRepository);

        category = {
            name: 'ciência',
            description: 'Categoria com foco em todo meio cientifico',
        }
   });

   it('Should be able create a new category', async () => {
       const expected = 'ciência';

        await createCategory.execute(category);

        const result = await categoryRepository.findByName(expected);

        expect(result.name).toEqual(expected);
   });
});