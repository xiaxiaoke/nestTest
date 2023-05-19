import { Injectable, HttpException } from '@nestjs/common';
import { PostsEntity } from './posts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { jsonMess1 } from '../assets/1.js';
import { jsonMess2 } from '../assets/2.js';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity)
    private postRepository: Repository<PostsEntity>,
  ) {}

  getAllMess(): object {
    console.log(jsonMess1, jsonMess2);
    return [...jsonMess1, ...jsonMess2];
  }

  async insertMessByJson() {
    return await this.postRepository.save(jsonMess1);
  }

  async insertMess(post: Partial<PostsEntity>) {
    const { questionTitle } = post;
    if (!questionTitle) {
      throw new HttpException('请输入标题名称', 401);
    }
    return await this.postRepository.save(post);
  }

  async batchInsetMess(post: Partial<PostsEntity>) {
    if (Array.isArray(post)) {
      const bol = post.every(async (el: PostsEntity) => {
        const id = el.id;
        const existPost = await this.postRepository.findOne({ where: { id } });
        return !existPost;
      });
      if (!bol) {
        throw new HttpException('有重复值', 401);
      }
    } else {
      throw new HttpException('数据格式不对', 401);
    }
    return await this.postRepository.save(post);
  }

  async delMess(id) {
    const existPost = await this.postRepository.findOne({ where: { id } });
    if (!existPost) {
      throw new HttpException(`id为${id}的问题不存在`, 401);
    }
    return await this.postRepository.remove(existPost);
  }
}
