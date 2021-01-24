import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import Note  from '../note/note.entity'
@Entity()
export default class users {

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


    @OneToMany(() => Note, note => note.user)
    note: Note[];users
  


}
