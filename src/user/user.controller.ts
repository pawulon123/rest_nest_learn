import { Controller, Get, Post, Put, Delete, Body, Param, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import {UserDTO} from './user'

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}
    @Get()
        all(): Promise<UserDTO[]> { 
            return this.userService.index()           
        }
    @Get(':id')
        one(@Param() params): Promise<UserDTO[]> { 
            return this.userService.findOne(params.id);          
        }
    @Post()
        create(@Body() user: UserDTO): void {
            this.userService.create(user);
        }
    @Put(':id')
        updata(@Param() params , @Body() user: UserDTO): void {
            this.userService.updata(params.id, user)
        }
    @Delete(':id')
        destroy(@Param() params): void {
            this.userService.destroy(params.id)
        }


}
