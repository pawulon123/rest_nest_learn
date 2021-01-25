import { Injectable, Logger } from '@nestjs/common';
import { users } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './user'
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(users)
        private userRepository: Repository<users>,
    ) {}

    async index(): Promise<UserDTO[]> {
        return await this.userRepository.find();
    }
    async findOne(id): Promise<UserDTO[]>{ 
        return await this.userRepository.find({where: [{ "id": id }]});
    }  
    async create(user: UserDTO): Promise<any> {
        const userReady = await this.userRepository.save(user);
    }
    async updata(id: string, body: UserDTO): Promise<any>{
        const objAnswer =  await this.userRepository.update(id,body);
    }
    async destroy(id: string): Promise<any> {
        const objAnswer = await this.userRepository.delete(id);
    }

}
