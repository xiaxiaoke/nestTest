import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getHello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('postHello')
  postHello(): string {
    return this.appService.getHello();
  }

  @Put('putHello/:id')
  putHello(): string {
    return 'putHello';
  }
}
