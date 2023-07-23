import { Book } from "../entities/Book";
import { ICreateBookDTO } from "../useCases/createBook/ICreateBookDTO";

export interface IBooksRepository {
  create: (data: ICreateBookDTO) => Promise<Book>;
  findById: (book_id: string) => Promise<Book | undefined>;
  listAll: (user_id: string) => Promise<Book[]>;
  getAllBooksByCategory(user_id: string, category_id: string): Promise<Book[]>;
  update: (id: string, data: ICreateBookDTO) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
