import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/products/product.dto';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CatalogService {
    constructor(private productsService: ProductsService) { }

    create(productDto: ProductDto) {
        return this.productsService.create(productDto);
    }

    findAll() {
        return this.productsService.findAll();
    }
}
