/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CertificacionComponent } from './certificacion.component';

describe('CertificacionesComponent', () => {
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
