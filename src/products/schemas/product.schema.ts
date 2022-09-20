import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Rating } from './rating.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    description: string;

    @Prop()
    category: string;

    @Prop()
    image: string;

    @Prop()
    rating: Rating;
}

export const ProductSchema = SchemaFactory.createForClass(Product);