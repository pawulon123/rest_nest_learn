import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class notes {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    value: string;
    @Column()
    user_id: number;
    @Column()
    created_at: string;
    @Column()
    updated_at: string;
    
}