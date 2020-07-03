/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { HotelServicio } from 'src/app/servicio/hotel.servicio';

describe('NavbarComponent', () => {
  let app: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let hotelService: HotelServicio; 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });
  it(`Deberia tener como nombre 'JohnBlake'`, async(() => {
    expect(app.usuario.nombre).toEqual('JohnBlake')
  }))

});
