import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/categories.schema';
import { Product, ProductDocument } from './schemas/product.schema';


@Injectable()
export class SeederService implements OnModuleInit {
  private readonly logger = new Logger(SeederService.name);

  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async onModuleInit() {
    await this.seedCategories();
    await this.seedProducts();
  }

  private async seedCategories() {
    const count = await this.categoryModel.countDocuments();
    if (count > 0) {
      this.logger.log('Categories already exist. Skipping...');
      return;
    }

    const categories = [
      { name: 'Men', slug: 'men' },
      { name: 'Women', slug: 'women' },
      { name: 'Accessories', slug: 'accessories' },
    ];

    await this.categoryModel.insertMany(categories);
    this.logger.log('Categories seeded successfully!');
  }

  private async seedProducts() {
    const count = await this.productModel.countDocuments();
    if (count > 0) {
      this.logger.log('Products already exist. Skipping...');
      return;
    }

    const categories = await this.categoryModel.find();
    if (categories.length === 0) {
      this.logger.warn('No categories found. Please seed categories first.');
      return;
    }

    const products = [
      {
        name: 'Men’s T-Shirt',
        slug: 'mens-tshirt',
        category: categories.find((c) => c.slug === 'men')?._id,
        description: 'Casual cotton T-shirt',
        price: 19.99,
        stock: 100,
        images: ['https://source.unsplash.com/400x400/?men,tshirt'],
      },
      {
        name: 'Women’s Dress',
        slug: 'womens-dress',
        category: categories.find((c) => c.slug === 'women')?._id,
        description: 'Elegant evening dress',
        price: 49.99,
        stock: 60,
        images: ['https://source.unsplash.com/400x400/?women,dress'],
      },
    ];

    await this.productModel.insertMany(products);
    this.logger.log('Products seeded successfully!');
  }
}
