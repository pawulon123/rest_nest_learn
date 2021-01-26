import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { Note as notes } from './note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([notes])],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NotesModule {}
