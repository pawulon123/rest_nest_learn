import { IsString, MaxLength, MinLength } from 'class-validator';
export class User{
    @MaxLength(14) @MinLength(2)readonly name: string;
    @IsString() readonly surename: string;
    @IsString()@MaxLength(14) @MinLength(2) readonly birthday: string;
    @IsString()@MaxLength(4) @MinLength(2) readonly password: string;
    @IsString()@MaxLength(24) @MinLength(2) readonly created_at:string;
    @IsString()@MaxLength(24) @MinLength(2) readonly updated_at: string;
};