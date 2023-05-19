import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // 创建接口文档服务
  const options = new DocumentBuilder()
    .setTitle('nest-q')
    .setDescription('nest-q接口文档介绍')
    .setVersion('1.0.0')
    .addTag('posts')
    .build();
  // 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
  const document = SwaggerModule.createDocument(app, options);
  // 启动swagger
  SwaggerModule.setup('/api/swagger', app, document);
  await app.listen(3333);
}
bootstrap();
