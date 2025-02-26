import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryManagementDto } from './dto/create-inventory-management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory-management.dto';
import { Prop } from '@nestjs/mongoose';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  async createProduct(@Body() productDetails: any) {
    await this.inventoryService.createProduct(productDetails);
  }

  @Get()
  async fetchProducts() {
    return await this.inventoryService.fetchProducts();
  }

  @Get(':id')
  async fetchOneProduct(@Param('id') id: string) {
    await this.inventoryService.fetchOneProduct(id);
  }
}
