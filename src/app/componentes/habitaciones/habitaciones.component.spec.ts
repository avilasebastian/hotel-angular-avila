/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HabitacionesComponent } from './habitaciones.component';

describe('HabitacionesComponent', () => {
  let component: HabitacionesComponent;
  let fixture: ComponentFixture<HabitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return ok habitacion', async(() => {
    existeUnaColumnaDeValor('Doble Economica')
  }))


  function existeUnaColumnaDeValor(valor: string) {
    existeTag('label', valor)
  }
  function existeTag(label: string, valor: string) {
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector(label).textContent).toContain(valor)
  }
});
