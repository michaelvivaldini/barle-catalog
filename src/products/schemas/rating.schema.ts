import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Rating {
    @Prop()
    rate: number;

    @Prop()
    count: number;
}