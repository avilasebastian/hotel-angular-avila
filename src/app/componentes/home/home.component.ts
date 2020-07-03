import { Component, OnInit } from '@angular/core';
import { HotelServicio } from 'src/app/servicio/hotel.servicio';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/dominio/hotel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  hoteles: Hotel[]
  constructor( private hotelService: HotelServicio, private router: Router ) {}
  
  ngOnInit() {
    this.hoteles = this.hotelService.hoteles
  }
}
