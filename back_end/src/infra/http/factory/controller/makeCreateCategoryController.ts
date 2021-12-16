import {CategoryRepository} from "@module/categories/repositories/in-memory/CategoryRepository";
import {CreateCategoryUseCase} from "@module/categories/useCases/register/CreateCategoryUseCase";
import {CreateCategoryController} from "@module/categories/useCases/register/CreateCategoryController";


export default function makeCreateCategoryController() {
    const categoryRepository = new CategoryRepository();

    const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

    return new CreateCategoryController(createCategoryUseCase);
}