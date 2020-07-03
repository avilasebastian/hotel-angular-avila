import { Component, OnInit } from '@angular/core';
import { HotelServicio } from 'src/app/servicio/hotel.servicio';
import { Usuario } from 'src/app/dominio/hotel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario:Usuario
  constructor(private hotelService: HotelServicio) { }

  ngOnInit() {
    this.usuario= this.hotelService.usuario
  }

}
