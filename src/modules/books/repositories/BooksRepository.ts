import { Repository, getRepository } from "typeorm";
import { Book } from "../entities/Book";
import { ICreateBookDTO } from "../useCases/createBook/ICreateBookDTO";
import { IBooksRepository } from "./IBooksRepository";
import { BookDoesNotBelongUserError } from "../useCases/bookError/BookDoesNotBelongUserError";

export class BooksRepository implements IBooksRepository {

    private repository: Repository<Book>;

    constructor() {
        this.repository = getRepository(Book);
    }

    async create ({
        user_id,
        category_id,
        title,
        author,
        status
    }: ICreateBookDTO): Promise<Book> {
        const book = this.repository.create({
            user_id,
            category_id,
            title,
            author,
            status
        });

        return this.repository.save(book);
    };

    async findById(book_id: string): Promise<Book | undefined> {
      const book = await this.repository.findOne(book_id);
      return book;
  }

    async listAll(user_id: string): Promise<Book[]> {
      const books = await this.repository
        .createQueryBuilder("b")
        .where("b.user_id = :user_id", { user_id })
        .getMany();

      return books;
    };

    async getAllBooksByCategory(user_id: string, category_id: string): Promise<Book[]> {
        const books = await this.repository
          .createQueryBuilder("b")
          .where("b.user_id = :user_id", { user_id })
          .andWhere("b.category_id = :category_id", { category_id })
          .getMany();

        return books;
    }

    async update(id: string, {
        user_id,
        category_id,
        title,
        pages,
        status
    }: ICreateBookDTO): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({
                user_id,
                category_id,
                title,
                pages,
                status
            })
            .where("id = :id")
            .setParameters({ id })
            .execute();
    };

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    };

}
