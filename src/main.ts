import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("bootstrap")

  const config = new DocumentBuilder()
    .setTitle('Amin backend service')
    .setDescription('amin backend apis')
    .setVersion('1.0')
    .addTag('amin')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 3000);
  logger.log(`🚀 Application is running on: http://localhost:${process.env.PORT ?? 3000}`);
  logger.log(`🚀 Application is running on: http://localhost:${process.env.PORT ?? 3000}/docs`);
}
bootstrap();
