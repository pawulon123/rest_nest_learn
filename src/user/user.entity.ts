import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class users {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  birthday: string;
  @Column()
  password: string;
 
}
