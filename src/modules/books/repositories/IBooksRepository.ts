import { Book } from "../entities/Book";
import { ICreateBookDTO } from "../useCases/createBook/ICreateBookDTO";

export interface IBooksRepository {
    create: (data: ICreateBookDTO) => Promise<Book>;
    findById: (id: string) => Promise<Book | undefined>;
    listAll: () => Promise<Book[]>;
    update: (id: string, data: ICreateBookDTO) => Promise<void>;
    delete: (id: string) => Promise<void>;
}