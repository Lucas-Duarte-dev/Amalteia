import {ICategoryRepository} from "@module/categories/repositories/ICategoryRepository";
import {Category} from "@module/categories/entity/Category";
import {ICategoryDTO} from "@module/categories/dto/ICategoryDTO";

class CategoryRepository implements ICategoryRepository {
    private categories: Category[];


    create({name, description}: ICategoryDTO): Promise<void> {
        return Promise.resolve(undefined);
    }

    findById(id: string): Promise<Category> {
        return Promise.resolve(undefined);
    }

}