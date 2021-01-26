import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Note } from './note.entity';
import { NoteDTO } from './note'
@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note)
        private noteRepository: Repository<Note>,
    ) { }
    getAll(): Promise<NoteDTO[]> {
        return  this.noteRepository.find();
    }
    findOne(id: number): Promise<NoteDTO> {
        return  this.noteRepository.findOneOrFail(id);
    }
     create(note: NoteDTO): Promise<Note> {
        return  this.noteRepository.save(note);
    }
    update(id: number, body: NoteDTO): Promise<UpdateResult> {
        return  this.noteRepository.update(id, body);
    }
     destroy(id: number): Promise<any> {
        return this.noteRepository.delete(id);
    }
}

