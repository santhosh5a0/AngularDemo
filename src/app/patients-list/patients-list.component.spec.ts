import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsListComponent } from './patients-list.component';
import { PatientsService } from '../Services/patients.service';
import { TestPatientService } from '../Testing/test-patient.service';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';

  let fixture: ComponentFixture<PatientsListComponent>;
  describe('PatientsListComponent', () => {
  let component: PatientsListComponent;
  let page: Page;

  beforeEach(async(() => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  TestBed.configureTestingModule({
      declarations: [ PatientsListComponent ],
      providers:[
        { provide: PatientsService, useClass: TestPatientService },
        { provide: Router,      useValue: routerSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  page = new Page();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display Patients', () => {
    expect(page.PatientRows.length).toBeGreaterThan(0);
  });
  it('should navigate when click Add Add patient', () => {
  //   let button = fixture.debugElement.nativeElement.queryAll('button');
  // button.click();
    page.click(page.AddPatientBtn);
    expect(page.navSpy.calls.any()).toBe(true, 'router.AddPatient called');
  });

  
});

class Page {
  /** Hero line elements */
  PatientRows: HTMLTableRowElement[];
  get buttons()     { return this.queryAll<HTMLButtonElement>('button'); }
  get AddPatientBtn()   { return this.buttons[0]; }

  /** Spy on router navigate method */
  navSpy: jasmine.Spy;
  constructor() {
    const PatientRowNodes = fixture.nativeElement.queryAll('tr');
    this.PatientRows = Array.from(PatientRowNodes);

    
    // Get the component's injected router navigation spy
    const routerSpy1 = fixture.debugElement.injector.get(Router);
    this.navSpy = routerSpy1.navigate as jasmine.Spy;
  };

  private queryAll<T>(selector: string): T[] {
    return fixture.nativeElement.querySelectorAll(selector);
  }
 
  public click(el: DebugElement | HTMLElement, eventObj: any = { button: 0 }): void {
    if (el instanceof HTMLElement) {
      el.click();
    } else {
      el.triggerEventHandler('click', eventObj);
    }
  }
}

