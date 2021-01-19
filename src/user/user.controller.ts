import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../interfaces/user'

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}
    @Get()
    async all(): Promise<User[]> { 
        return await this.userService.index()           
    }
    @Get(':id')
    async one(@Param() params): Promise<User> { 
        return await this.userService.findOne(params.id);          
    }
    @Post()
    async create(@Body() user: User): Promise<any> {
        await this.userService.create(user);
    }
    @Put(':id')
    async updata(@Param() params, @Body() user: User): Promise<any> {
        await this.userService.updata(params.id, user)
    }
    @Delete(':id')
    async destroy(@Param() params): Promise<any> {
        await this.userService.destroy(params.id)
    }
}
