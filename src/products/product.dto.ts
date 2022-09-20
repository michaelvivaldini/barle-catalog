import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

interface RatingDto {
    rate: number;
    count: number;
}

export class ProductDto {
    constructor(title: string, price: number, description: string, category: string, image: string, rating: RatingDto) {
        this.title = title
    }

    title: string;

    price: number;

    description: string;

    category: string;

    image: string;

    rating: RatingDto;
}