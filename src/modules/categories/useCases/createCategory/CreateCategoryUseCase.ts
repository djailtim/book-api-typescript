import { inject, injectable } from "tsyringe";

import { ICreateCategoryDTO } from "./ICreateCategoryDTO";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { CreateCategoryError } from "./CreateCategoryError";


@injectable()
export class CreateCategoryUseCase {
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoriesRepository,
    ) {}

    async execute({ name, description}: ICreateCategoryDTO) {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
        if(categoryAlreadyExists) {
            throw new CreateCategoryError();
        }

        const category = await this.categoriesRepository.create({
            name, 
            description
        });

        return category;
    }
}