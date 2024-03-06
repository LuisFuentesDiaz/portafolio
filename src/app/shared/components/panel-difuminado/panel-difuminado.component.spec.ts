import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDifuminadoComponent } from './panel-difuminado.component';

describe('PanelDifuminadoComponent', () => {
  let component: PanelDifuminadoComponent;
  let fixture: ComponentFixture<PanelDifuminadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelDifuminadoComponent]
    });
    fixture = TestBed.createComponent(PanelDifuminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
