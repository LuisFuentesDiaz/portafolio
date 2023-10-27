import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownSectionComponent } from './down-section.component';

describe('DownSectionComponent', () => {
  let component: DownSectionComponent;
  let fixture: ComponentFixture<DownSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownSectionComponent]
    });
    fixture = TestBed.createComponent(DownSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
