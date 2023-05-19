import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { BankModule } from './bank/bank.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('DB_HOST', '43.143.133.117'),
          port: configService.get<number>('DB_PORT', 3306),
          username: configService.get('DB_USER', 'nestdb'),
          password: configService.get('DB_PASSWORD', '4L7bask7DRpSkdzH'),
          database: configService.get('DB_DATABASE', 'nestdb'),
          synchronize: configService.get('DB_SYNCHRONIZE', false),
          entities: ['dist/**/*.entity{ .ts,.js}'], // 按照这里的配置，所有entity的对象可以自动注入，不需导入到任何模块了
        };
      },
    }),
    PostsModule,
    UserModule,
    BankModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
