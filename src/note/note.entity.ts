import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('notes')

export class Note {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 14, nullable: true })
    title: string;
    @Column({ type: 'varchar', length: 14 })
    value: string;  
    @Column({ type: 'integer', unsigned: true, nullable: true  })
    userId: number;
}