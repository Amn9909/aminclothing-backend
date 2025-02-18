import { Injectable } from '@nestjs/common';
import { CreateInventoryManagementDto } from './dto/create-inventory-management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory-management.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class InventoryManagementService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async onModuleInit() {
    await this.seedProducts();
  }

  async seedProducts() {
    const productCount = await this.productModel.countDocuments();
    if (productCount > 0) {
      console.log('Products already exist. Skipping seeding.');
      return;
    }

    const products = [
      // 👕 Men's Clothing
      {
        name: 'Men’s T-Shirt',
        category: 'Men',
        description: 'Casual cotton T-shirt',
        pricePerUnit: 19.99,
        totalStock: 100,
        imageUrl: 'https://source.unsplash.com/400x400/?men,tshirt',
      },
      {
        name: 'Men’s Shirt',
        category: 'Men',
        description: 'Formal white shirt',
        pricePerUnit: 29.99,
        totalStock: 80,
        imageUrl: 'https://source.unsplash.com/400x400/?men,shirt',
      },
      {
        name: 'Men’s Jeans',
        category: 'Men',
        description: 'Slim fit blue jeans',
        pricePerUnit: 39.99,
        totalStock: 70,
        imageUrl: 'https://source.unsplash.com/400x400/?men,jeans',
      },
      {
        name: 'Men’s Jacket',
        category: 'Men',
        description: 'Winter leather jacket',
        pricePerUnit: 79.99,
        totalStock: 50,
        imageUrl: 'https://source.unsplash.com/400x400/?men,jacket',
      },

      // 👗 Women's Clothing
      {
        name: 'Women’s Dress',
        category: 'Women',
        description: 'Elegant evening dress',
        pricePerUnit: 49.99,
        totalStock: 60,
        imageUrl: 'https://source.unsplash.com/400x400/?women,dress',
      },
      {
        name: 'Women’s Blouse',
        category: 'Women',
        description: 'Casual cotton blouse',
        pricePerUnit: 24.99,
        totalStock: 90,
        imageUrl: 'https://source.unsplash.com/400x400/?women,blouse',
      },
      {
        name: 'Women’s Skirt',
        category: 'Women',
        description: 'Long summer skirt',
        pricePerUnit: 34.99,
        totalStock: 50,
        imageUrl: 'https://source.unsplash.com/400x400/?women,skirt',
      },

      // 👫 Unisex Clothing
      {
        name: 'Unisex Hoodie',
        category: 'Unisex',
        description: 'Comfortable hoodie',
        pricePerUnit: 59.99,
        totalStock: 100,
        imageUrl: 'https://source.unsplash.com/400x400/?hoodie',
      },
      {
        name: 'Unisex Joggers',
        category: 'Unisex',
        description: 'Soft jogger pants',
        pricePerUnit: 44.99,
        totalStock: 75,
        imageUrl: 'https://source.unsplash.com/400x400/?joggers',
      },

      // 👜 Accessories
      {
        name: 'Leather Belt',
        category: 'Accessories',
        description: 'Premium leather belt',
        pricePerUnit: 19.99,
        totalStock: 120,
        imageUrl: 'https://source.unsplash.com/400x400/?belt',
      },
      {
        name: 'Sunglasses',
        category: 'Accessories',
        description: 'Stylish UV protection',
        pricePerUnit: 14.99,
        totalStock: 90,
        imageUrl: 'https://source.unsplash.com/400x400/?sunglasses',
      },
      {
        name: 'Backpack',
        category: 'Accessories',
        description: 'Durable travel backpack',
        pricePerUnit: 39.99,
        totalStock: 60,
        imageUrl: 'https://source.unsplash.com/400x400/?backpack',
      },
    ];

    // Generate 50 products
    const generatedProducts: Product[] = [];
    for (let i = 0; i < 50; i++) {
      const randomProduct =
        products[Math.floor(Math.random() * products.length)];
      generatedProducts.push({
        ...randomProduct,
        name: `${randomProduct.name} #${i + 1}`,
      });
    }

    await this.productModel.insertMany(generatedProducts);
    console.log('50 Products seeded successfully!');
  }

  create(createInventoryManagementDto: CreateInventoryManagementDto) {
    return 'This action adds a new inventoryManagement';
  }

  findAll() {
    return `This action returns all inventoryManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryManagement`;
  }

  update(
    id: number,
    updateInventoryManagementDto: UpdateInventoryManagementDto,
  ) {
    return `This action updates a #${id} inventoryManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryManagement`;
  }
}
