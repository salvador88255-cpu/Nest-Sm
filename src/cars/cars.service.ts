import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corola'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ]
    findAll(){
        return this.cars
    }
    findOneById(id: number){
        const car = this.cars.find(item => item.id == id)
        const valor = car?.brand
        // console.log(valor == undefined ? '' : valor)
        if (!car) throw new NotFoundException(`El ID: ${id} no encuentra ningun valor`)
            
       return{
           car 
        }
    }
}
