import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import  User  from '../user/user.entity';
@Entity()

export default class notes {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    value: string;
    @Column()
    userId: number;
    @Column()
    created_at: string;
    @Column()
    updated_at: string;

    @ManyToOne(() => User, user => user.note)
    user: User;

    
}