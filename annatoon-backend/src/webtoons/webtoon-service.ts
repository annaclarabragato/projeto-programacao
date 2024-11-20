import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/categories/category-entity";
import { Webtoon } from "src/webtoons/webtoon-entity";
import { Repository } from "typeorm";

@Injectable()
export class WebtoonService {
    constructor(
        @InjectRepository(Webtoon)
        private readonly repository: Repository<Webtoon>,
    ) { }

    findAll(): Promise<Webtoon[]> {
        return this.repository.find();
    }

    findById(id: string): Promise<Webtoon> {
        return this.repository.findOneBy({ id: id });
    }

    findByCategory(category: Category): Promise<Webtoon[]> {
        return this.repository.find({
            where: {
                categories: {
                    id: category.id,
                },
            },
        });
    }

    save(webtoon: Webtoon): Promise<Webtoon> {
        return this.repository.save(webtoon);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}