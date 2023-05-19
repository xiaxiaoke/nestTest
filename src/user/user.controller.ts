import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '注册用户' })
  @Post('register')
  register(@Body() createUser): Promise<Partial<UserEntity>> {
    return this.userService.register(createUser);
  }

  @ApiOperation({ summary: '获取所有用户' })
  @Get('getUsers')
  getUsers() {
    return this.userService.getUsers();
  }
}
