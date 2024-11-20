import { Category } from "src/categories/category-entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('webtoon')
export class Webtoon {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    title: string;

    @Column({ type: 'text', nullable: false })
    description: string;

    @Column({ nullable: false })
    poster: string;

    @ManyToMany(() => Category, {eager: true})
    @JoinTable({
      name: 'webtoon_category'
    })
    categories: Category[];
}
