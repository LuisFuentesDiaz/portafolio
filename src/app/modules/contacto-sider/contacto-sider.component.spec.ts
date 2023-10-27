import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoSiderComponent } from './contacto-sider.component';

describe('ContactoSiderComponent', () => {
  let component: ContactoSiderComponent;
  let fixture: ComponentFixture<ContactoSiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoSiderComponent]
    });
    fixture = TestBed.createComponent(ContactoSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
