import { Module } from '@nestjs/common';
import { InventoryManagementService } from './inventory-management.service';
import { InventoryManagementController } from './inventory-management.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [InventoryManagementController],
  providers: [InventoryManagementService],
})
export class InventoryManagementModule {}
