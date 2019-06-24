import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { PatientsService } from '../Services/patients.service';
import { Patient } from '../Shared/patient';
 import {Router} from '@angular/router';
 @Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private patient: PatientsService,private router: Router) { }
  PatientForm:FormGroup;
  HideValidations:boolean=true;
  patientObj:Patient;

  ngOnInit() {
    
    this.PatientForm=new FormGroup({
        'name':new FormControl(null,[Validators.required]),
        'phone':new FormControl(null,[Validators.required,Validators.min(6)]),
    });

  }
  get f() { return this.PatientForm.controls; }
  onSubmit(){
    this.HideValidations=false;
    if (this.PatientForm.valid) {
      this.patientObj=new Patient();
      this.patientObj.name=this.PatientForm.get('name').value;
      this.patientObj.phone=this.PatientForm.get('phone').value;

      return this.patient.AddPatient(this.patientObj).subscribe((data: {}) => {
        this.router.navigate(['']);
        
        })
  }
  }
}
