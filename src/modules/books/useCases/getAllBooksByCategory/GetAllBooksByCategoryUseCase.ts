import { inject, injectable } from "tsyringe";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { ICategoriesRepository } from "../../../categories/repositories/ICategoriesRepository";
import { CategoryNotFoundError } from "../../../categories/useCases/categoryError/CategoryNotFoundError";

@injectable()
export class GetAllBooksByCategoryUseCase {
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository,

    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(user_id: string, category_name: string) {
    const category = await this.categoriesRepository.findByName(category_name);

    if(!category) throw new CategoryNotFoundError();

    const books = await this.booksRepository.getAllBooksByCategory(user_id, category.id as string);
    return books;
  }
}
