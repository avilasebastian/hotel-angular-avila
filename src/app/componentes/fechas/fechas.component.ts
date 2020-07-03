import { Component, OnInit, Input } from '@angular/core';
import { HotelServicio } from 'src/app/servicio/hotel.servicio';
import { NgbDate, NgbDateParserFormatter, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment'
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.css']
})

export class FechasComponent implements OnInit {
  @Input() total: number

  public myDatePickerOptionsCheckIn: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy'
  };
  public myDatePickerOptionsCheckOut: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy'
  };
  public checkIn: any = { date: { year: 2019, month: 10, day: 9 } };
  public checkOut: any = { date: { year: 2022, month: 10, day: 19 } };
  constructor(
    private hotelService: HotelServicio,
    private ngbDateParserFormatter: NgbDateParserFormatter,
  ) { }

  ngOnInit() {
    const fechaDehoy = new Date()

    // le doy formato y deshabilito los dias anteriores y hoy
    this.deshabilitarFechaDesde()
    fechaDehoy.setDate(fechaDehoy.getDate() + 1)
    this.checkIn = {
      date: this.convertirAMiDate(fechaDehoy)
    }

    this.deshabilitarFechaHasta(this.checkIn)
    fechaDehoy.setDate(fechaDehoy.getDate() + 1)
    this.checkOut = {
      date: this.convertirAMiDate(fechaDehoy)
    }
  }

  deshabilitarFechaDesde(): void {
    const fechaDeAyer = new Date()
    // fechaDeAyer.setDate(new Date().getDate()-1)
    this.myDatePickerOptionsCheckIn = {
      dateFormat: 'dd/mm/yyyy',
      disableUntil: this.convertirAMiDate(fechaDeAyer)
    }
  }

  deshabilitarFechaHasta(fecha: any): void {
    let fechaDehoy = this.convertirADate(fecha)

    this.myDatePickerOptionsCheckOut = {
      dateFormat: 'dd/mm/yyyy',
      disableUntil: this.convertirAMiDate(fechaDehoy)
    }

    fechaDehoy.setDate(fechaDehoy.getDate() + 1)
    if (fecha.date.day >= this.checkOut.date.day && fecha.date.month >= this.checkOut.date.month) {
      this.checkOut = {
        date: this.convertirAMiDate(fechaDehoy)
      }
    }
  }

  getDias(): number {
    this.deshabilitarFechaHasta(this.checkIn)

    const desde = this.convertirADate(this.checkIn)
    const hasta = this.convertirADate(this.checkOut)

    let dias: number
    let cuentaDesde = moment(desde)
    let cuentaHasta = moment(hasta)
    dias = cuentaHasta.diff(cuentaDesde, 'days')
    return dias
  }

  precioTotal(): number {
    return this.getDias() * this.total
  }

  // tengo un Date y lo paso a mi formato
  convertirAMiDate(fecha: Date): any {
    return {
      year: fecha.getFullYear(),
      month: fecha.getMonth() + 1,
      day: fecha.getDate()
    }
  }
  // de mi formato a Date
  convertirADate(fecha: any): Date {
    if (!fecha) {
      return null
    }
    return new Date(fecha.date.year, fecha.date.month - 1, fecha.date.day)
  }
}
