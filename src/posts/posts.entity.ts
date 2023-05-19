//    posts/posts.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  govDeptId: string;

  @Column('tinyint')
  questionType: number;

  @Column('tinyint')
  questionStatus: number;

  @Column('text')
  questionTitle: string;

  @Column('text')
  questionOption: string;

  @Column('text')
  questionAnswer: string;

  @Column({ length: 30 })
  creator: string;

  @Column({ length: 30 })
  createDate: string;

  @Column({ length: 30 })
  updater: string;

  @Column({ length: 30 })
  updateDate: string;
}
