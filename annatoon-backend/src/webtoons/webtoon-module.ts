import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Webtoon } from "./webtoon-entity";
import { WebtoonService } from "./webtoon-service";
import { WebtoonController } from "./webtoon-controller";
import { Category } from "src/categories/category-entity";

@Module({
    imports: [TypeOrmModule.forFeature([Webtoon, Category])],
    providers: [WebtoonService],
    controllers: [WebtoonController],
})
export class WebtoonModule {}