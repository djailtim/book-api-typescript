import { inject, injectable } from "tsyringe";

import { IBooksRepository } from "../../repositories/IBooksRepository";
import { ICreateBookDTO } from "./ICreateBookDTO";

@injectable()
export class CreateBookUseCase {
    constructor(
        @inject('BooksRepository')
        private booksRepository: IBooksRepository
    ) {}

    async execute({ user_id, category_id, title, author, status }: ICreateBookDTO) {

        const book = await this.booksRepository.create({
            user_id,
            category_id,
            title,
            author,
            status
        });

        return book;
    }
}
