import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { ProductDto } from 'src/products/product.dto';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
    constructor(private catalogService: CatalogService) { }
    @Get('/')
    findAll(@Req() request: Request) {
        return this.catalogService.findAll();
    }

    @Post('/')
    create(@Body() productDto: ProductDto) {
        return this.catalogService.create(productDto);
    }

}
