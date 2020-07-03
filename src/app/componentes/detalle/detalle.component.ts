import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelServicio } from 'src/app/servicio/hotel.servicio';
import { Hotel, Servicio, Habitacion } from 'src/app/dominio/hotel';
import { async } from 'q';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  elemnto:Hotel
  servicios=[0]
  habitacion:number=0

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelServicio
    ) { }
  
  async ngOnInit() {
    this.elemnto= await this.hotelService.getHotel(this.hotelId())
  }

  hotelId(): string {
		return this.route.snapshot.params.id
  }
  
  async funcionCambiar(e){
     this.servicios= await e
  }

  habitacionSeleccionada(e){
    this.habitacion=e 
  }



  getPrecioSeviciosAdicionales():number{
    const reduce= (acumulador,valorActual)=>acumulador+valorActual
    if(this.servicios.length!=0){
      return this.servicios.reduce(reduce)}
    else return 0
  }


  getPrecioTotal():number{
    return this.getPrecioSeviciosAdicionales()+this.habitacion
  }
}
