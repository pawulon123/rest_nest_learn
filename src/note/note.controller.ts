import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { NoteService } from './note.service';
import  Message from '../interfaces/note'

@Controller('note')
export class NoteController {
    constructor(
        private readonly noteService: NoteService
    ) {}
    @Get()
    async all(): Promise<Message[]> {
        return await this.noteService.index();
    }
    @Get(':id')
    async one(@Param() params): Promise<Message> {
        return await this.noteService.findOne(params.id);
    }
    @Post()
    async create(@Body() note: Message): Promise<any> {
        await this.noteService.create(note);
    }
    @Put(':id')
    async updata(@Param() params, @Body() note: Message): Promise<any> {
        await this.noteService.updata(params.id, note);
    }
    @Delete(':id')
    async destroy(@Param() params): Promise<any> {
        await this.noteService.destroy(params.id);
    }
}
