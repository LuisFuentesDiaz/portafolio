/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstrellaFugazComponent } from './estrella-fugaz.component';

describe('EstrellaFugazComponent', () => {
  let component: EstrellaFugazComponent;
  let fixture: ComponentFixture<EstrellaFugazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrellaFugazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrellaFugazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
