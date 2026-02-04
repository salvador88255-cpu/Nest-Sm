import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto/';
// import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corola'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ]
    findAll(){
        return this.cars
    }
    findOneById(id: string){
        const car = this.cars.find(item => item.id == id)
        const valor = car?.brand
        // console.log(valor == undefined ? '' : valor)
        if (!car) throw new NotFoundException(`El ID: ${id} no encuentra ningun valor`)
            
       return{
           car 
        }
    }
    create(createCarDto: CreateCarDto){
        const car: Car={
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car)
        return car
    }
    uodateCard(id: string, updateCarDto: UpdateCarDto){

    }
}
