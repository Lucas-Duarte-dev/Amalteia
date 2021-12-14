import {ICategoryDTO} from "@module/categories/dto/ICategoryDTO";
import {Category} from "@module/categories/entity/Category";

export interface ICategoryRepository {
    create({name, description}: ICategoryDTO): Promise<void>;
    findById(id: string): Promise<Category>;
    findByName(name: string): Promise<Category>;
}