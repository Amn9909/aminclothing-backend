import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async onModuleInit() {
    await this.seedUsers();
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  
  async seedUsers() {
    const existingUsers = await this.userModel.countDocuments();
    if (existingUsers > 0) {
      console.log('Users already exist. Skipping seeding.');
      return;
    }

    const users = [
      { name: 'admin', email : 'admin@gmail.com', password: 'admin123', role: 'admin' },
      { name: 'user1', email : 'user@gmail.com', password: 'pass123', role: 'user' },
    ];

    // Hash passwords before storing
    for (const user of users) {
      try {
        user.password = await bcrypt.hash(user.password, 10);
      } catch (error) {
        console.log('Error', error)
      }
    }

    await this.userModel.insertMany(users);
    console.log('Default users created successfully!');
  }
}
