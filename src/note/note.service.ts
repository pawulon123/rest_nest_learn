import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import {InjectRepository } from '@nestjs/typeorm';
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
async findOne(id): Promise<Note[]>{
return await this.noteRepository.find({where: [{ 'id': id }]});
}
async create(note: Note): Promise<any> {
 const noteReady = await this.noteRepository.save(note);
// Logger.log(noteReady);
}
async updata(id: string, body: Note): Promise<any>{
return await this.noteRepository.update(id,body)

}
async destroy(id: string): Promise<any> {
 const objAnswer = await this.noteRepository.delete(id);
Logger.log(objAnswer);
}
}

