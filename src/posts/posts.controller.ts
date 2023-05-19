import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsEntity } from './posts.entity';
import { ApiTags, ApiParam, ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dot';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: '获取所有数据' })
  @Get('getAllMess')
  getAllMess(): object {
    return this.postsService.getAllMess();
  }

  @ApiOperation({ summary: '单个插入数据' })
  @Post('insetMess')
  @ApiParam({ name: 'postMess', type: Object, description: 'postMess' })
  async insetMess(@Body() post: CreatePostDto): Promise<Partial<PostsEntity>> {
    return await this.postsService.insertMess(post);
  }

  @ApiOperation({ summary: '批量插入数据' })
  @Post('batchInsetMess')
  @ApiParam({ name: 'postMessArr', type: Array, description: 'postMessArr' })
  async batchInsetMess(
    @Body() post: CreatePostDto,
  ): Promise<Partial<PostsEntity[]>> {
    return await this.postsService.batchInsetMess(post);
  }

  @ApiOperation({ summary: '通过json文件插入数据' })
  @Post('insertMessByJson')
  async insertMessByJson(): Promise<Partial<PostsEntity>[]> {
    return await this.postsService.insertMessByJson();
  }

  @ApiOperation({ summary: '通过id删除数据' })
  @Get('delMess')
  @ApiParam({ name: 'id', type: String, description: 'id' })
  async delMess(@Query() query): Promise<Partial<PostsEntity>> {
    return await this.postsService.delMess(query.id);
  }
}
