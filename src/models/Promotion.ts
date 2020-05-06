import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('promotions')
class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  finished: boolean;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @Column({ select: false })
  @UpdateDateColumn({ select: false })
  updated_at: Date;
}

export default User;
