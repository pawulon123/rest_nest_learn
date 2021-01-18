import { Injectable, Logger } from '@nestjs/common';
import { users } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    async findOne(id): Promise<User>{ 
        // return await this.userRepository.find({where: [{ "id": id }]});
        return await this.userRepository.findOne(id);
    }  
    async create(user: User): Promise<any> {
        const userReady = await this.userRepository.save(user);
        // Logger.log(userReady);    
    }
    async updata(id: string, body: User): Promise<any>{
        const objAnswer =  await this.userRepository.update(id,body);
        Logger.log(objAnswer);
    }
    async destroy(id: string): Promise<any> {
        const objAnswer = await this.userRepository.delete(id);
        Logger.log(objAnswer);
    }

}
