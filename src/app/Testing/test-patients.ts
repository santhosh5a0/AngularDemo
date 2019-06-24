import { Patient } from '../Shared/patient';


/** return fresh array of test Patients */
export function getTestPatients(): Patient[] {
  return [
    {PatientId:1 , name: 'santhosh',phone:9030880617 },
    {PatientId:2 , name: 'sandeep',phone:8801824554 },
    {PatientId:5 , name: 'test',phone:1231231233 },
    {PatientId:6 , name: 'test1',phone:1231231232 }
  ];
}
