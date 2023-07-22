import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class GetAllCategoriesUseCase {
    constructor(
        @inject('CategoriesRepository')
        private categoryRepository: ICategoriesRepository,
    ) {}

    async execute() {
        const categories = await this.categoryRepository.findAll();
        return categories;
    }
}