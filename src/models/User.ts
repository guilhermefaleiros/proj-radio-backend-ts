import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @Column()
  admin: boolean;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @Column({ select: false })
  @UpdateDateColumn({ select: false })
  updated_at: Date;
}

export default User;
