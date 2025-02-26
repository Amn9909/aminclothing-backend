import { Injectable, Logger } from '@nestjs/common';
import { CreateInventoryManagementDto } from './dto/create-inventory-management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory-management.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class InventoryService {
  private readonly logger = new Logger(InventoryService.name);
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  createProduct(productDetails) {
    try {
      console.log(productDetails);
      return 'prod created';
    } catch (error) {
      this.logger.error(error);
    }
  }

  async fetchProducts() {
    return 'all prods';
  }

  async fetchOneProduct(id: string) {
    return 'all one product';
  }

  async updateOneProduct(id: string, productDetails: any) {}

  async deleteOneProduct(id: string) {}

  async deleteProducts() {}
}
