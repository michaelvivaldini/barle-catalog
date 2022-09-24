import { Controller, Get, Req, NotFoundException, Param, Res, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
    PRODUCT_NOT_FOUND_MESSAGE = 'Product not found.'; 

    constructor(private catalogService: CatalogService) { }
    @Get('/')
    listAll(@Req() request: Request) {
        return this.catalogService.findAll();
    }

    @Get('/product/:prodSlug')
    getProductDetails(@Param('prodSlug') prodSlug: string, @Res({ passthrough: true }) res: Response) {
        const id = this.validateIdFromSlugOr400(prodSlug, res);
        return this.findProductOr404(id, res);
    }

    validateIdFromSlugOr400(slug: string, res: Response) {
        const INVALID_ID_MESSAGE = "Invalid Id"
        const slugArray = slug.split('-');
        const id =  slugArray.pop();
        if (isValidObjectId(id)) {
            return id;
        }
        throw new BadRequestException(INVALID_ID_MESSAGE);
    }

    findProductOr404(id: string, res: Response) {
        const PRODUCT_NOT_FOUND_MESSAGE = "Product Not Found"
        const product = this.catalogService.getOne(id);
        if(!product) {
            throw new NotFoundException(PRODUCT_NOT_FOUND_MESSAGE);
        }
        return product;
    }
}
