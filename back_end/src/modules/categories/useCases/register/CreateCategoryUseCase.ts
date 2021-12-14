import {ICategoryRepository} from "@module/categories/repositories/ICategoryRepository";
import {DomainException} from "@infra/http/error/DomainException";

type IRequest = {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute({name, description}: IRequest): Promise<void> {
        const categoryExists = await this.categoryRepository.findByName(name);

        if (categoryExists) {
            throw new DomainException('Category already exists');
        }

        await this.categoryRepository.create({name, description});

        return;
    }
}

export {CreateCategoryUseCase}