import { Repository, getRepository } from "typeorm";

import { Category } from "../entities/Category";
import { ICreateCategoryDTO } from "../useCases/createCategory/ICreateCategoryDTO";
import { ICategoriesRepository } from "./ICategoriesRepository";
import { IUpdateCategoryDTO } from "../useCases/updateCategory/IUpdateCategoryDTO";


export class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async findById(category_id: string): Promise<Category | undefined> {
        return this.repository.findOne(category_id);
    }

    async findByName (name: string): Promise<Category | undefined> {
        return this.repository.findOne({ name });
    }

    async findAll(): Promise<Category[]> {
        return this.repository.find();
    };

    async create({ name, description}: ICreateCategoryDTO): Promise<Category> {
        const category = this.repository.create({ name, description });
        return this.repository.save(category);
    }

    async delete(id: string): Promise<void> {
      this.repository.delete(id);
    }

    async update(id: string, { name, description }: IUpdateCategoryDTO) {
      this.repository.update(id, { name, description });
    }

}
