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
        return this.noteService.index()
    }
    @Get(':id')
    getOne( @Param() params): Promise<NoteDTO[]> {
        return this.noteService.findOne(params.id);
    }
    @Post()
    create( @Body() note: NoteDTO): void {
        this.noteService.create(note);
    }

    @Put(':id')
    updata( @Param() params, @Body() note: NoteDTO): Promise<NoteDTO> {
        return this.noteService.update(params.id, note)
    }
    @Delete(':id')
    destroy( @Param() params): void {
        this.noteService.destroy(params.id)
    }
}
