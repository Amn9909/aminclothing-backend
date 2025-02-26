import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingPageModule } from './landing-page/landing-page.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryManagementModule } from './inventory/inventory.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/aminDB?authSource=admin'),
    LandingPageModule,
    InventoryManagementModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
