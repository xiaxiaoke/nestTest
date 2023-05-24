import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class AppController {
  @UseGuards(AuthGuard('local'))
  @ApiOperation({ summary: '登录' })
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
