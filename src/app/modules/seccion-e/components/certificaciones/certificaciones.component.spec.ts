/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CertificacionesComponent } from './certificaciones.component';

describe('CertificacionesComponent', () => {
  let component: CertificacionesComponent;
  let fixture: ComponentFixture<CertificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
