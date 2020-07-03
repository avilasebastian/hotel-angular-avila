import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/dominio/hotel';
import { HotelServicio } from 'src/app/servicio/hotel.servicio';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() hotel: Hotel
  constructor(private hotelService: HotelServicio) { }

  ngOnInit() {
  }

}
