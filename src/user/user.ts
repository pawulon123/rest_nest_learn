import {IsString, MaxLength, MinLength, IsPositive,IsNotEmpty,IsInt, IsOptional } from 'class-validator';
export class UserDTO{
        @IsOptional()
        @IsInt()    
        @IsNotEmpty()
        @IsPositive()
    readonly id: number;
        
        @IsString()
        @IsNotEmpty()
        @MaxLength(14)
        @MinLength(2)
    readonly name: string;
        
        @IsString()
        @IsNotEmpty()
        @MaxLength(14)
        @MinLength(2)
    readonly surname: string;
        
        @IsString()
        @MaxLength(14) 
        @MinLength(2)
    readonly birthday: string;

        @IsNotEmpty()
        @IsString()
        @MaxLength(4)
        @MinLength(2)
    readonly password: string;
        
  
};