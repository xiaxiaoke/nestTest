import { UserEntity } from './entities/user.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async register(createUser: Partial<UserEntity>) {
    const { username } = createUser;

    const existUser = await this.userRepository.findOne({
      where: { username },
    });

    if (existUser) {
      throw new HttpException('用户已存在', HttpStatus.BAD_REQUEST);
    }

    const newUser = await this.userRepository.create(createUser);
    this.userRepository.save(newUser);
    return await this.userRepository.findOne({ where: { username } });
  }

  async getUsers() {
    return this.userRepository.find();
  }

  async findOne(username: string): Promise<any | undefined> {
    const arr = await this.getUsers();
    return arr.find((user) => user.username === username);
  }
}
