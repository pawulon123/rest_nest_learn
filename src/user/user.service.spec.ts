import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { users } from './user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import  giveMocks  from '../../test/helpers/mocks';
import  globalError  from '../../test/helpers/globalError';
import { tsImportEqualsDeclaration } from '@babel/types';


describe('UserService', () => {
  let service: UserService;
  const mocks = giveMocks();

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
      });
    it('if an error should return internal server error', async () => {
      mockRepository.find.mockRejectedValue(globalError);
      return expect(service.index()).rejects.toMatchObject({statusCode: globalError.statusCode});
    });
  });
  describe('findOneOrFail', ()=>{
    it('should find a existing  user', async () => {
      const user = mocks.user();
      mockRepository.findOneOrFail.mockReturnValue(user);
      const User = await service.findOne('1');
      expect(User).toMatchObject({ name : user.name });
      expect(mockRepository.findOneOrFail).toHaveBeenCalledTimes(1);
    });
    it('if an error should return internal server error', async () => {
      mockRepository.findOneOrFail.mockRejectedValue(globalError);
      return expect(service.findOne(null)).rejects.toMatchObject({statusCode: globalError.statusCode});
    });
  });
  describe('create', () => {
    it('if successful, it should return undefined', async () => {
      const user = mocks.user();
      const success = await service.create(user);
      expect(mockRepository.save).toHaveBeenCalledTimes(1)
      expect(success).toBeUndefined();
    });
    it('if an error should return internal server error', async () => {
      const user = mocks.user();
      mockRepository.save.mockRejectedValue(globalError);
      return expect(service.create(user)).rejects.toMatchObject({statusCode: globalError.statusCode});
    });
  });
  describe('update', () => {
    it('if successful, it should return undefined', async () => {
      const user = mocks.user();
      const success = await service.updata('1', user);
      expect(mockRepository.update).toHaveBeenCalledTimes(1)
      expect(success).toBeUndefined();
    });
    it('if an error should return internal server error', async () => {
      const user = mocks.user();
      mockRepository.update.mockRejectedValue(globalError);
      return expect(service.updata('1',user)).rejects.toMatchObject({statusCode: globalError.statusCode});
    });
  });
  describe('delete', () => {
    it('if successful, it should return undefined', async () => {
      const success = await service.destroy('1');
      expect(mockRepository.delete).toHaveBeenCalledTimes(1)
      expect(success).toBeUndefined();
    });
    it('if an error should return internal server error', async () => {
      mockRepository.delete.mockRejectedValue(globalError);
      return expect(service.destroy('1')).rejects.toMatchObject({statusCode: globalError.statusCode});
    });
  });



})