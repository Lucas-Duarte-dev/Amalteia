import {ICategoryRepository} from "@module/categories/repositories/ICategoryRepository";
import {Category} from "@module/categories/entity/Category";
import {ICategoryDTO} from "@module/categories/dto/ICategoryDTO";

class CategoryRepository implements ICategoryRepository {

    private categories: Category[];
    private static instance: CategoryRepository;

    constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.instance) {
            CategoryRepository.instance = new CategoryRepository();
        }

        return CategoryRepository.instance;
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

    async findByName(name: string): Promise<Category> {
        return this.categories.find(category => category.name === name);
    }

    async update(old_name: string, new_name: string): Promise<Category> {
        const category = this.categories.find(category => category.name === old_name);
        category.name = new_name
        return category;
    }
}

export {CategoryRepository}