import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { users } from './user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import  giveMocks  from '../../test/helpers/mocks';


describe('UserService', () => {
  let service: UserService;
  const mocks = giveMocks()
  const globalError ={
    statusCode: 500,
    message: "Internal server error"
  }
  let mockRepository= {
    find:jest.fn(),
    findOneOrFail:jest.fn(),
    save:jest.fn(),
    update:jest.fn(),
    delete:jest.fn(),
    destroy:jest.fn()
   
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide:getRepositoryToken(users),
          useValue: mockRepository
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('index', ()=>{
    it('should be return list all users', async () => {
      const user = mocks.user();
      mockRepository.find.mockReturnValue([user, user])
      const Users = await service.index();
      expect(Users).toHaveLength(2);
      expect(mockRepository.find).toHaveBeenCalledTimes(1);
    })
  });
  describe('findOneOrFail', ()=>{
    it('should find a existing  user', async () => {
      const user = mocks.user();
      mockRepository.findOneOrFail.mockReturnValue(user);
      const User = await service.findOne('1');
      expect(User).toMatchObject({ name : user.name })
      expect(mockRepository.findOneOrFail).toHaveBeenCalledTimes(1);
    })
  });
  describe('create', ()=>{
    it('if successful, it should return undefined', async () => {
      const user = mocks.user();
      mockRepository.save.mockReturnValue({});
      const success = await service.create(user);
      expect(success).toEqual(undefined);
    });
    it('if an error should return internal server error', async () => {
      mockRepository.save.mockReturnValue(globalError);
      await service.create(null).catch((error) => {
         expect(error).toMatchObject({statusCode: 500})
        });
    
    })
  });

});
