/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificacionComponent } from './components/certificaciones/certificacion.component';

describe('SeccionEPageComponent', () => {
  let component: CertificacionComponent;
  let fixture: ComponentFixture<CertificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CertificacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
