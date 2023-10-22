/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconoSkillComponent } from './icono-skill.component';

describe('IconoSkillComponent', () => {
  let component: IconoSkillComponent;
  let fixture: ComponentFixture<IconoSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconoSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconoSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
