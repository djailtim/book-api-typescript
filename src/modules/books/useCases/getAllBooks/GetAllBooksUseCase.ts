import { inject, injectable } from "tsyringe";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
export class GetAllBooksUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) {}

  async execute(user_id: string) {
    const books = await this.booksRepository.listAll(user_id);
    return books;
  }
}
