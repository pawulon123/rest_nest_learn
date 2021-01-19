import { Controller, Get, Post, Put, Delete, Body, Param, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import {User} from '../interfaces/user'

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}
    @Get()
        all(): Promise<User[]> { 
            return this.userService.index()           
        }
    @Get(':id')
        one(@Param() params): Promise<User> { 
            return this.userService.findOne(params.id);          
        }
    @Post()
        create(@Body() user: User): void {
            this.userService.create(user);
            
        }
    @Put(':id')
        updata(@Param() params , @Body() user: User): void {
            this.userService.updata(params.id, user)
        }
    @Delete(':id')
        destroy(@Param() params): void {
            this.userService.destroy(params.id)
        }


}
