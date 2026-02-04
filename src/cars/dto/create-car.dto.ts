import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    @IsString({message:'Se espera el brand'})
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;

}