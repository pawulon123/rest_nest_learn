import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { NotesModule } from './note/note.module';
import { ExceptionsLoggerFilter } from './utils/exceptionsLogger.filter';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from 'nestjs-dotenv';
import  configDb  from './config.db';


@Module({
  imports: [
    TypeOrmModule.forRoot(configDb()),
    UserModule,
    NotesModule,
    ConfigModule.forRoot(),
    
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ExceptionsLoggerFilter,
    },
      
  ],
})
export class AppModule {}

