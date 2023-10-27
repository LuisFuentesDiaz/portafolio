import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosSiderPageComponent } from './datos-sider-page.component';

describe('DatosSiderPageComponent', () => {
  let component: DatosSiderPageComponent;
  let fixture: ComponentFixture<DatosSiderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosSiderPageComponent]
    });
    fixture = TestBed.createComponent(DatosSiderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
