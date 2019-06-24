import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../Services/patients.service';
 import {Router} from '@angular/router';
@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
  patients: any = [];
  columnsHeaders:any=["Name","Phone"]
  constructor(private patient: PatientsService,private router: Router ) { }

  ngOnInit() {
    return this.patient.getPatientData().subscribe((data: {}) => {
      console.log(data);
      this.patients = data;
      })
  }

  addPatient(){
    this.router.navigate(['/AddPatient']);
  }

}
