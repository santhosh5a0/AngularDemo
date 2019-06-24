import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../Shared/patient';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http:HttpClient) { }
  getDataUrl = 'http://localhost:52046/api/patient/PatientList';
  addPatientUrl = 'http://localhost:52046/api/patient/AddPatient';

getPatientData(): Observable<Patient[]> {
  return this.http.get<Patient[]>(this.getDataUrl)

  }
  AddPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.addPatientUrl,patient)
  
    }

}
