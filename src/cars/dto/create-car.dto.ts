import { IsString } from "class-validator";

export class CreateCarDto {
    @IsString({message:'Se espera el brand'})
    readonly brand: string;

    @IsString()
    readonly model: string;

}