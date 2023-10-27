import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderTarjetaComponent } from './sider-tarjeta.component';

describe('SiderTarjetaComponent', () => {
  let component: SiderTarjetaComponent;
  let fixture: ComponentFixture<SiderTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiderTarjetaComponent]
    });
    fixture = TestBed.createComponent(SiderTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
