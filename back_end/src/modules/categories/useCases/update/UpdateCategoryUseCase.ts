import {Category} from "@module/categories/entity/Category";
import {ICategoryRepository} from "@module/categories/repositories/ICategoryRepository";
import {DomainException} from "@infra/http/error/DomainException";

class UpdateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(old_name: string, new_name: string): Promise<Category> {
        const category = await this.categoryRepository.findByName(old_name);

        if (!category) {
            throw new DomainException('Category not found');
        }

        return await this.categoryRepository.update(old_name, new_name);
    }
}

export {UpdateCategoryUseCase}