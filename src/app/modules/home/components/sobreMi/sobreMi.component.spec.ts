/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SobreMiComponent } from './sobreMi.component';

describe('SeccionBPageComponent', () => {
    let component: SobreMiComponent;
    let fixture: ComponentFixture<SobreMiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SobreMiComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SobreMiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
