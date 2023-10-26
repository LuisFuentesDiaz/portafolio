import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesCabeceraComponent } from './habilidades-cabecera.component';

describe('HabilidadesCabeceraComponent', () => {
  let component: HabilidadesCabeceraComponent;
  let fixture: ComponentFixture<HabilidadesCabeceraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabilidadesCabeceraComponent]
    });
    fixture = TestBed.createComponent(HabilidadesCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
