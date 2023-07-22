import { Repository, getRepository } from "typeorm";
import { Book } from "../entities/Book";
import { ICreateBookDTO } from "../useCases/createBook/ICreateBookDTO";
import { IBooksRepository } from "./IBooksRepository";

export class BooksRepository implements IBooksRepository {

    private repository: Repository<Book>;

    constructor() {
        this.repository = getRepository(Book);
    }

    async create ({
        user_id,
        category_id,
        title,
        pages,
        status
    }: ICreateBookDTO): Promise<Book> {
        const book = this.repository.create({
            user_id,
            category_id,
            title,
            pages,
            status
        });

        await this.repository.save(book);

        return book;
    };

    async findById(id: string): Promise<Book | undefined> {
        const book = await this.repository.findOne(id);
        return book;
    };

    async listAll(): Promise<Book[]> {
        const books = await this.repository.find();
        return books;
    };

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