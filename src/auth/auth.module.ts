// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { LocalStorage } from './local.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), PassportModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStorage, AuthController],
})
export class AuthModule {}
