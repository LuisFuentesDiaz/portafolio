import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoTarjetaComponent } from './contacto-tarjeta.component';

describe('ContactoTarjetaComponent', () => {
  let component: ContactoTarjetaComponent;
  let fixture: ComponentFixture<ContactoTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoTarjetaComponent]
    });
    fixture = TestBed.createComponent(ContactoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
