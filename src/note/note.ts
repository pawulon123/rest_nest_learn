import { IsString, MaxLength, MinLength, IsNotEmpty, IsInt, IsPositive, IsOptional } from 'class-validator';
export class NoteDTO {
        @IsOptional()
        @IsNotEmpty()
        @IsInt()
        @IsPositive()
    id: number

        @IsNotEmpty()
        @MaxLength(14)
        @MinLength(2)
    title: string;

        @MaxLength(14)
        @MinLength(2)
    value: string;
    
        @IsNotEmpty()
        @IsInt()
        @IsPositive()
    userId: number

};