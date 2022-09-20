import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async create(productDto: ProductDto): Promise<Product> {
        const createdCat = new this.productModel(productDto);
        return createdCat.save();
    }

    async findAll(): Promise<Product[]> {
        const response = await this.productModel.find().exec();
        return response;
    }
}
