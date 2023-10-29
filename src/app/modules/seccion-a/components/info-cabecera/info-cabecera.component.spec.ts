import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCabeceraComponent } from './info-cabecera.component';

describe('InfoCabeceraComponent', () => {
  let component: InfoCabeceraComponent;
  let fixture: ComponentFixture<InfoCabeceraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCabeceraComponent]
    });
    fixture = TestBed.createComponent(InfoCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
