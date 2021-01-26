import { Controller, Get, Post, Put, Delete, Body, Param, Logger } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteDTO } from './note'
import { UpdateResult } from 'typeorm';

@Controller('note')
export class NoteController {
    constructor(
        private readonly noteService: NoteService
    ) { }
    @Get()
    getAll(): Promise<NoteDTO[]> {
        return this.noteService.getAll();
    }
    @Get(':id')
    getOne(@Param() params: {id: string}): Promise<NoteDTO> {
        return this.noteService.findOne(+params.id);
    }
    @Post()
    create(@Body() note: NoteDTO):Promise<any> {
        return this.noteService.create(note);
    }
    @Put(':id')
    updata(@Param()params: {id: string}, @Body() note: NoteDTO): Promise<UpdateResult> {  
        return this.noteService.update(+params.id, note);
    }
    @Delete(':id')
    destroy(@Param() params : {id: string}):Promise<any> {
        return this.noteService.destroy(+params.id);
    }
}
