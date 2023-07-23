import { inject, injectable } from "tsyringe";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { ICreateBookDTO } from "../createBook/ICreateBookDTO";
import { BookNotFoundError } from "../bookError/BookNotFoundError";
import { BookDoesNotBelongUserError } from "../bookError/BookDoesNotBelongUserError";

@injectable()
export class UpdateBookUserCase {
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository,
  ) {}

  async execute(book_id: string, { user_id, category_id, title, author, status }: ICreateBookDTO) {
    const book = await this.booksRepository.findById(book_id);
    if(!book) {
      throw new BookNotFoundError();
    }
    if(book?.user_id != user_id) {
      throw new BookDoesNotBelongUserError();
    }

    const bookUpdated = await this.booksRepository.update(book_id, { user_id, category_id, title, author, status });
    return bookUpdated;
  }
}
