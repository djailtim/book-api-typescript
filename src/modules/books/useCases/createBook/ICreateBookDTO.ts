import { Book } from "../../entities/Book";

export type ICreateBookDTO = Pick<
    Book,
    "user_id" | "category_id" | "title" | "pages" | "status"
>;