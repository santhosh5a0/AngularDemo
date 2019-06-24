import { Injectable } from '@angular/core';
import { getTestPatients } from './test-patients';
import { Observable, defer } from 'rxjs';
import { Patient } from '../Shared/patient';

@Injectable({
  providedIn: 'root'
})
export class TestPatientService  {

  constructor() {
  }
  patients:Patient[]=getTestPatients();
  lastResult: Observable<Patient[]>; // result from last method call
  Result: Observable<Patient>; // result from last method call
  getPatientData(): Observable<Patient[]> {
    return this.lastResult =  this.asyncData<Patient[]>(this.patients);
  }
  AddPatient(patient: Patient): Observable<Patient> {
    patient.PatientId=10;
    return this.Result =  this.asyncData(patient);
  }

   asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }
}
