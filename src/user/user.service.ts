import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import User from './user.entity';
import Person from '../interfaces/user'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<Person>,
    ) {}
    async index(): Promise<Person[]> {
        return await this.userRepository.find();
    }
    async findOne(id): Promise<Person> { 
        return await this.userRepository.findOneOrFail(id);
    }  
    async create(user: Person): Promise<any> {
        await this.userRepository.save(user);
    }
    async updata(id: string, body: Person): Promise<any> {
        await this.userRepository.update(id,body);
    }   
    async destroy(id: string): Promise<any> {
        await this.userRepository.delete(id);
    }

}
