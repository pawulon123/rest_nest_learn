import { Controller, Get, Post, Put, Delete, Body, Param, Logger } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from '../interfaces/note'

@Controller('note')
export class NoteController {
    constructor(
        private readonly noteService: NoteService
    ) { }
    @Get()
    all(): Promise<Note[]> {
        return this.noteService.index();
    }
    @Get(':id')
    one( @Param() params): Promise<Note[]> {
        return this.noteService.findOne(params.id);
    }
    @Post()
    create( @Body() note: Note): void {
        this.noteService.create(note);
    }

    @Put(':id')
    async updata( @Param() params, @Body() note: Note) {
      await this.noteService.updata(params.id, note);
          
       
    }
    @Delete(':id')
    destroy( @Param() params): void {
        this.noteService.destroy(params.id);
    }
}
