import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientComponent } from './add-patient.component';
import { PatientsService } from '../Services/patients.service';
import { TestPatientService } from '../Testing/test-patient.service';
import { Router } from '@angular/router';

describe('AddPatientComponent', () => {
  let component: AddPatientComponent;
  let fixture: ComponentFixture<AddPatientComponent>;

  beforeEach(async(() => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  TestBed.configureTestingModule({
      declarations: [ AddPatientComponent ],
      providers:[
        { provide: PatientsService, useClass: TestPatientService },
        { provide: Router,      useValue: routerSpy}
      ]
    })
    // Override component's own provider
    .overrideComponent(AddPatientComponent, {
      set: {
        providers: [
          { provide: PatientsService, useClass: TestPatientService }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
