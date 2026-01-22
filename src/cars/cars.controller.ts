import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { get } from 'http';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    // private cars = ["Nisan", 'Toyota', 'Honda']

    constructor(
        private readonly carsSerice: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsSerice.findAll()
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({version: '5'})) id: string) {
        console.log({ id })
        // valores.map()
        // throw new Error('auxilio')
        // console.log(this.carsSerice.findAll())
        return this.carsSerice.findOneById(id)
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCar(@Body() createCardDto: CreateCarDto) {
        return createCardDto
    }
    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any) 
        {
        return body
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {
            method: 'delete',
            id: id
        }
    }
    // @Get(':id')
    // getCarById(@Param('id') id: number) {
    //     console.log({ id: + id })
    //     // valores.map()
    //     return this.cars[id]

    // }
    // @Get(':nombre')
    // getRecorrido(@Param('nombre') nombre: string) {
    //     // console.log({id: nombre})
    //     return {
    //         nombre
    //     }
    // }
    // postCarById() {

    // }
}