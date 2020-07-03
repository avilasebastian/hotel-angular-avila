/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServiciosAdicionalesComponent } from './servicios-adicionales.component';

describe('ServiciosAdicionalesComponent', () => {
  let component: ServiciosAdicionalesComponent;
  let fixture: ComponentFixture<ServiciosAdicionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosAdicionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
