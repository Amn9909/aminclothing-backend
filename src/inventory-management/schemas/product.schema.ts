
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  description : string

  @Prop()
  totalStock : number 

  @Prop()
  pricePerUnit : number
}

export const ProductSchema = SchemaFactory.createForClass(Product);
