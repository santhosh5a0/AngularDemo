import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientsListComponent} from './patients-list/patients-list.component'
import { AddPatientComponent } from './add-patient/add-patient.component';

const routes: Routes = [
  {path:'',component:PatientsListComponent},
  {path:'AddPatient',component:AddPatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
