import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { notes } from './note.entity';
import { NoteDTO } from './note'
@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(notes)
        private noteRepository: Repository<notes>,
    ) { }
    async index(): Promise<NoteDTO[]> {
        return await this.noteRepository.find();
    }
    async findOne(id): Promise<NoteDTO[]> {
        return await this.noteRepository.find({ where: [{ 'id': id }] });
    }
    async create(note: NoteDTO): Promise<any> {
        const noteReady = await this.noteRepository.save(note);

    }
    async update(id: number, body: NoteDTO): Promise<NoteDTO> {
        const objAnswer = await this.noteRepository.update(id, body)
        return body;
    }
    async destroy(id: number): Promise<any> {
        return this.noteRepository.delete(id);
        
    }
}

