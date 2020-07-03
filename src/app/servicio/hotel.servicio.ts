import { Injectable } from "@angular/core";
import { Hotel, Habitacion, Servicio, Usuario } from '../dominio/hotel';


@Injectable({
    providedIn:'root'
})

export class HotelServicio{
    constructor(){
        this.usuario = new Usuario('Sebastian')
        const habitacion1 = new Habitacion('Doble Economica',4000)
        const habitacion2 = new Habitacion('Doble Estandar',5000)
        const habitacion3 = new Habitacion('Triple Economica',6000)
        const habitacion4 = new Habitacion('Doble Economica',5500)
        const habitacion5 = new Habitacion('Doble Economica',3000)
        const habitacion6 = new Habitacion('Individual',2500)
        const servicio1 = new Servicio('Almuerzo',400)
        const servicio2 = new Servicio('Cena',500)
        const servicio3 = new Servicio('Cochera',700)
        const servicio4 = new Servicio('Lavanderia',300)
        const servicio5 = new Servicio('Wifi',200)

        this.crearHotel('Las Hayas Resort', 'Ushuaia',5,[habitacion4,habitacion2,habitacion3],[servicio1,servicio2,servicio3,servicio4])
        this.crearHotel('Hosteleria la Caldera', 'Salta',3,[habitacion5,habitacion6,habitacion3],[servicio1,servicio2,servicio3,servicio4,servicio5])
        this.crearHotel('Villa Huapi', 'Bariloche',4,[habitacion1,habitacion2],[servicio1,servicio2,servicio4,servicio5])
        console.log('servicio hoteles: ',this.hoteles)

    }
    static idHotel = 0


    hotel:Hotel
    hoteles:Hotel[] = []
    usuario:Usuario

    crearHotel(nombre:string, lugar:string,estrellas:number, habitaciones:Habitacion[], servicios:Servicio[]){
        const hotel = new Hotel()
        hotel.init({
            id: this.asignarIdHotel(),
            nombre: nombre,
            lugar: lugar,
            estrellas:estrellas,
            habitaciones: habitaciones,
            servicios: servicios
        })
        this.hoteles.push(hotel)
    }
    
    asignarIdHotel():number{
        HotelServicio.idHotel = HotelServicio.idHotel + 1
        return HotelServicio.idHotel
    }

    getHotel(idDelHotel:string): Promise<Hotel>{
        return new Promise((resuelve)=> resuelve(this.hoteles.find(elemento =>elemento.id== Number(idDelHotel))))   
    }
    // crearUsuario(){
    //     this.usuario = new Usuario('JohnBlake')
    // }

}
