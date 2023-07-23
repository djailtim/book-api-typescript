import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { CategoryNotFoundError } from "../categoryError/CategoryNotFoundError";

@injectable()
export class GetCategoryUseCase {
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoriesRepository,
    ) {}

    async execute(id: string) {
        const category = await this.categoriesRepository.findById(id);

        if(!category) {
            throw new CategoryNotFoundError();
        }

        return category;
    }
}
