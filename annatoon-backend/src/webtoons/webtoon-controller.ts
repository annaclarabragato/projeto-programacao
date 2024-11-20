import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query } from "@nestjs/common";
import { WebtoonService } from "./webtoon-service";
import { Webtoon } from "./webtoon-entity";
import { Category } from "src/categories/category-entity";

@Controller('webtoons')
export class WebtoonController{

    constructor(
        private service: WebtoonService){}

    @Get()
    findAll(@Query('categoryId') categoryId?: string): Promise<Webtoon[]>{
        if (categoryId){
            return this.service.findByCategory({
                id: Number (categoryId),
            } as Category);
        }
        return this.service.findAll();
    }

    @Get(':id')
    async findById (@Param('id', new ParseUUIDPipe) id: string): Promise<Webtoon>{
        const found = await this.service.findById(id);

        console.log(found);

        if (!found) {
            throw new HttpException('Webtoon not found', HttpStatus.NOT_FOUND);
        }
        return found

    }

    @Post()
    create(@Body() category: Webtoon): Promise<Webtoon> {
        return this.service.save(category);
    }

    @Put(':id')
    async update(@Param('id', ParseUUIDPipe) id: string, @Body() movie): Promise<Webtoon> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Webtoon not found', HttpStatus.NOT_FOUND);
        }

        movie.id = found.id;

        return this.service.save(movie);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {

        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Webtoon not found', HttpStatus.NOT_FOUND);
        }

        return this.service.remove(id);
    }

}