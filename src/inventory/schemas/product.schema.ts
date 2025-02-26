import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Category' })
  category: Types.ObjectId;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String] }) 
  images: string[];

  @Prop({ type: [String], enum: ['S', 'M', 'L', 'XL', 'XXL'], default: ['M'] })
  availableSizes: string[];

  @Prop({ required: true, default: 0 })
  stock: number;

  @Prop({ default: false })
  isFeatured: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
