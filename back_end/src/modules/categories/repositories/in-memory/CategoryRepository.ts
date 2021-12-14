import {ICategoryRepository} from "@module/categories/repositories/ICategoryRepository";
import {Category} from "@module/categories/entity/Category";
import {ICategoryDTO} from "@module/categories/dto/ICategoryDTO";

class CategoryRepository implements ICategoryRepository {

    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    async create({name, description}: ICategoryDTO): Promise<void> {
        const category = new Category();

        Object.assign(category, {
            name,
            description
        });

        this.categories.push(category);

        return;
    }

    async findById(id: string): Promise<Category> {
        return this.categories.find(category => category.id === id);
    }

    async findByName(name: string): Promise<Category> {
        return this.categories.find(category => category.name === name);
    }
}

export {CategoryRepository}