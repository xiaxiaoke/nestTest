// user/user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import * as bcrypt from 'bcryptjs';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 50 })
  username: string;

  @Column()
  password: string;

  @Column('tinyint')
  type: number;

  // @BeforeInsert()
  // async encryptPwd() {
  //   this.password = bcrypt.hashSync(this.password);
  // }
}
