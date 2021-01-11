import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { notes } from '../note/note.entity'
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


    @OneToMany(() => notes, notes => notes.user)
    note: notes[];users
  


}
