import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { get } from 'http';
import { CarsService } from './cars.service';

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
    getCarById(@Param('id', ParseIntPipe) id: number) {
        console.log({ id })
        // valores.map()
        // throw new Error('auxilio')
        // console.log(this.carsSerice.findAll())
        return this.carsSerice.findOneById(+id)
    }

    @Post()
    createCar(@Body() body: any) {
        return body
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