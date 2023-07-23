import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateBookUserCase } from "./UpdateBookUseCase";

export class UpdateBookController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { id: book_id } = request.params;
    const { category_id, title, author, status } = request.body;

    const updateBook = container.resolve(UpdateBookUserCase);
    await updateBook.execute(book_id, {
      user_id,
      category_id,
      title,
      author,
      status,
    });

    return response.send();
  }
}
