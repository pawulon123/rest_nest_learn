import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import Message from './note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NotesModule {}
