import { Controller, Get, Post, Put, Delete, Body, Param, Logger } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteDTO } from './note'

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
    getOne(@Param() params: {id: number}): Promise<NoteDTO> {
        return this.noteService.findOne(params.id);
    }
    @Post()
    create(@Body() note: NoteDTO):Promise<any> {
        return this.noteService.create(note);
    }
    @Put(':id')
    updata(@Param()params: {id: number}, @Body() note: NoteDTO): Promise<NoteDTO> {  
        return this.noteService.update(params.id, note);
    }
    @Delete(':id')
    destroy(@Param() params : {id: number}):Promise<any> {
        return this.noteService.destroy(params.id);
    }
}
