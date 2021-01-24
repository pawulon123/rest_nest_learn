import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import  giveMocks  from '../../test/helpers/mocks';
import createMockRepository from '../../test/helpers/mock.repository';
describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  const mocks = giveMocks();
  const methods = ['findOne', 'create', 'updata','destroy'];

  
  const uuserService =  mocks.userService();
 
 
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide:UserService,
          useValue:mocks.userService()
        }
      ],
    }).compile();
    
    controller = module.get<UserController>(UserController);
  
    
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('all', ()=>{
    it('should be return list all users', async () => {


      const user = mocks.user();
     
      
  
  });
})



});
