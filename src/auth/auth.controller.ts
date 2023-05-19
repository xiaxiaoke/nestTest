import { Controller, Body, Post, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() user, @Req() req) {
    console.log(user);
    return req.user;
  }
}
