import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../enum/user.common.enum';

export type UserDocument = User & Document;

@Schema({ timestamps: true }) 
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false }) // Excludes password by default
  password: string;

  @Prop()
  isVerified: boolean;

  @Prop({ enum: Role, default: Role.USER })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
