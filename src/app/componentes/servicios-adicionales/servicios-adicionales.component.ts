import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/dominio/hotel';

@Component({
  selector: 'app-servicios-adicionales',
  templateUrl: './servicios-adicionales.component.html',
  styleUrls: ['./servicios-adicionales.component.css']
})
export class ServiciosAdicionalesComponent implements OnInit {
  @Input() hotel: Hotel
  @Output() cambio= new EventEmitter()
  listaDeServicios=[]
  
  constructor() { }

  ngOnInit() {
  }
  si(algo){
    this.listaDeServicios.push(algo)
    this.cambio.emit(this.listaDeServicios)
  }
  no(algo){
    this.listaDeServicios.splice(this.listaDeServicios.indexOf(algo),1)
    this.cambio.emit(this.listaDeServicios)
  }


}
