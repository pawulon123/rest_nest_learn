import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class users {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surename: string;
  @Column()
  birthday: string;
  @Column()
  created_at: string;
  @Column()
  updated_at: string;
  @Column()
  password: string;
}
