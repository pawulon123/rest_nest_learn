import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import  Note  from './note.entity';
import  Message  from '../interfaces/note'

@Injectable()
export class  NoteService {
    constructor(
        @InjectRepository(Note)
        private noteRepository: Repository<Note>,
    ) {}    
    async index(): Promise<Message[]> {
        return await this.noteRepository.find();
    }
    async findOne(id): Promise<Message> {
        return await this.noteRepository.findOneOrFail(id);
    }
    async create(note: Message): Promise<any> {
        await this.noteRepository.save(note);
    }
    async updata(id: string, body: Message): Promise<any> {
        await this.noteRepository.update(id,body);
    }
    async destroy(id: string): Promise<any> {
        await this.noteRepository.delete(id);
    }
}

