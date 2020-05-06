import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  read: boolean;

  @Column()
  date: Date;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @Column({ select: false })
  @UpdateDateColumn({ select: false })
  updated_at: Date;
}

export default Order;
