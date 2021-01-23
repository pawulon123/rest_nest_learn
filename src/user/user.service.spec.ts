import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { users } from './user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import  giveMocks  from '../../test/helpers/mocks';
import  rejectGlobalError  from '../../test/helpers/globalError';
import { tsImportEqualsDeclaration } from '@babel/types';
import createMockRepository from '../../test/helpers/mock.repository';


describe('UserService', () => {
  let service: UserService;
  const mocks = giveMocks();
  const methods = ['find', 'findOneOrFail', 'save', 'update',  'delete'];
  const mockRepository = createMockRepository(methods); 
  const catchGlobalError = rejectGlobalError(mockRepository)
  
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
    it('if an error should return internal server error', async () => catchGlobalError('find', service.index.bind(service)));
  });
  describe('findOne', ()=>{
    it('should find a existing  user', async () => {
      const user = mocks.user();
      mockRepository.findOneOrFail.mockReturnValue(user);
      const User = await service.findOne('1');
      expect(User).toMatchObject({ name : user.name });
      expect(mockRepository.findOneOrFail).toHaveBeenCalledTimes(1);
      expect(mockRepository.findOneOrFail).toHaveBeenCalledWith('1');
    });
    it('if an error should return internal server error', async () => catchGlobalError('findOneOrFail', service.findOne.bind(service)));
  });
  describe('create', () => {
    it('if successful, it should return undefined', async () => {
      const user = mocks.user();
      const success = await service.create(user);
      expect(mockRepository.save).toHaveBeenCalledTimes(1)
      expect(success).toBeUndefined();
      expect(mockRepository.save).toHaveBeenCalledWith(user);
    });
    it('if an error should return internal server error', async () => catchGlobalError('save', service.create.bind(service)));
  });
  describe('update', () => {
    it('if successful, it should return undefined', async () => {
      const user = mocks.user();
      const success = await service.updata('1', user);
      expect(mockRepository.update).toHaveBeenCalledTimes(1)
      expect(success).toBeUndefined();
      expect(mockRepository.update).toHaveBeenCalledWith('1', user);
    });
    it('if an error should return internal server error', async () => catchGlobalError('update', service.updata.bind(service)));
  });
  describe('delete', () => {
    it('if successful, it should return undefined', async () => {
      const success = await service.destroy('1');
      expect(success).toBeUndefined();
      expect(mockRepository.delete).toHaveBeenCalledTimes(1)
      expect(mockRepository.delete).toHaveBeenCalledWith('1');
    });
    it('if an error should return internal server error', async () => catchGlobalError('delete', service.destroy.bind(service)));
  });



})