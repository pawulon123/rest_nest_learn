import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { users } from '../user/user.entity';
@Entity()

export class notes {
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

    @ManyToOne(() => users, user => user.note)
    user: users;

    
}