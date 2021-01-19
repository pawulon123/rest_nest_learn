import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { users } from './user.entity';
import { User } from '../interfaces/user'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(users)
        private userRepository: Repository<users>,
    ) {}
    async index(): Promise<User[]> {
        return await this.userRepository.find();
    }
    async findOne(id): Promise<User> { 
        return await this.userRepository.findOneOrFail(id);
    }  
    async create(user: User): Promise<any> {
        await this.userRepository.save(user);
    }
    async updata(id: string, body: User): Promise<any> {
        await this.userRepository.update(id,body);
    }   
    async destroy(id: string): Promise<any> {
        await this.userRepository.delete(id);
    }

}
