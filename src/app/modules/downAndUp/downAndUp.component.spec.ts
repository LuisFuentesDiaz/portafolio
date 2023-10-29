/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DownAndUpComponent } from './downAndUp.component';

describe('DownAndUpComponent', () => {
  let component: DownAndUpComponent;
  let fixture: ComponentFixture<DownAndUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownAndUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownAndUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
