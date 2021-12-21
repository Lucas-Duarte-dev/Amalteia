import {CategoryRepository} from "@module/categories/repositories/in-memory/CategoryRepository";
import {UpdateCategoryUseCase} from "@module/categories/useCases/update/UpdateCategoryUseCase";
import {UpdateCategoryController} from "@module/categories/useCases/update/UpdateCategoryController";


export default function makeUpdateCategoryController() {
    const categoryRepository = CategoryRepository.getInstance();

    const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository);

    return new UpdateCategoryController(updateCategoryUseCase);
}
