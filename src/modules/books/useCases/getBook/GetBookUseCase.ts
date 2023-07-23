import { inject, injectable } from "tsyringe";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { BookNotFoundError } from "../bookError/BookNotFoundError";
import { BookDoesNotBelongUserError } from "../bookError/BookDoesNotBelongUserError";

@injectable()
export class GetBookUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) {}

  async execute(book_id: string, user_id: string) {
    const book = await this.booksRepository.findById(book_id);

    if(!book) {
      throw new BookNotFoundError();
    }
    if(book?.user_id != user_id) {
      throw new BookDoesNotBelongUserError();
    }

    return book;
  }
}
