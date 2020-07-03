import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel, Habitacion } from 'src/app/dominio/hotel';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  @Input() hotel: Hotel
  @Output() tipoHabitacion = new EventEmitter()
  habitacion: number = 0
  constructor() { }

  ngOnInit() {
  }
  si(precio:number) {
    this.habitacion = precio
    this.tipoHabitacion.emit(this.habitacion)
  }
  no(algo:any) {
    console.log('Veamos no', algo)
  }

}
