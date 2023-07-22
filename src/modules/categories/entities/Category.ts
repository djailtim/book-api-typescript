import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Book } from "../../books/entities/Book";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Book, book => book.category)
    book: Book[];

    constructor() {
        if(!this.id) {
          this.id = uuid();
        }
      }
}