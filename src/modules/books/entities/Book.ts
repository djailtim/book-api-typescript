import { v4 as uuid } from "uuid";

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../categories/entities/Category";
import { User } from "../../users/entities/User";

@Entity("books")
export class Book {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column("uuid")
    user_id: string;
    @ManyToOne(() => User, (user) => user.book)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column("uuid")
    category_id: string;
    @ManyToOne(() => Category, (category) => category.book)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @Column()
    title: string;
    
    @Column()
    pages: number;
    
    @Column()
    status: string;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}