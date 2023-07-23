import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { IUpdateCategoryDTO } from "./IUpdateCategoryDTO";
import { CategoryNotFoundError } from "../categoryError/CategoryNotFoundError";

@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(id: string, { name, description }: IUpdateCategoryDTO) {
    const category = await this.categoriesRepository.findById(id);

    if(!category) throw new CategoryNotFoundError();

    await this.categoriesRepository.update(id, { name, description });
  }
}
