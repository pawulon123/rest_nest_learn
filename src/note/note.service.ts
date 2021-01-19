import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { notes } from './note.entity';
import { Note } from '../interfaces/note'

@Injectable()
export class  NoteService {
    constructor(
        @InjectRepository(notes)
        private noteRepository: Repository<notes>,
    ) {}    
    async index(): Promise<Note[]> {
        return await this.noteRepository.find();
    }
    async findOne(id): Promise<Note> {
        return await this.noteRepository.findOneOrFail(id);
    }
    async create(note: Note): Promise<any> {
        await this.noteRepository.save(note);
    }
    async updata(id: string, body: Note): Promise<any> {
        await this.noteRepository.update(id,body)
    }
    async destroy(id: string): Promise<any> {
        await this.noteRepository.delete(id);
    }
}

