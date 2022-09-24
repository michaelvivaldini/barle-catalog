import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatalogService } from './catalog/catalog.service';
import { CatalogController } from './catalog/catalog.controller';
import { ProductsService } from './products/products.service';
import { Product, ProductSchema } from './products/schemas/product.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mikeask_user:<password>@cluster0.m49ob.mongodb.net/barle-db'),
  MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [CatalogController],
  providers: [CatalogService, ProductsService],
})
export class AppModule { }
