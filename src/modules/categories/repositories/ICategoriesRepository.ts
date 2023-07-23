import { Category } from "../entities/Category";
import { ICreateCategoryDTO } from "../useCases/createCategory/ICreateCategoryDTO";
import { IUpdateCategoryDTO } from "../useCases/updateCategory/IUpdateCategoryDTO";

export interface ICategoriesRepository {
    create: (data: ICreateCategoryDTO) => Promise<Category>;
    findById: (category_id: string) => Promise<Category | undefined>;
    findByName: (name: string) => Promise<Category | undefined>;
    findAll: () => Promise<Category[]>;
    delete: (id: string) => Promise<void>;
    update: (id: string, data: IUpdateCategoryDTO) => Promise<void>;
}
