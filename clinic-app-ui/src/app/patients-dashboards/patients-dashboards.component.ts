import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-patients-dashboards',
  templateUrl: './patients-dashboards.component.html',
  styleUrls: ['./patients-dashboards.component.css']
})
export class PatientsDashboardsComponent implements OnInit {

  datasource = new MatTableDataSource<Patient>(patienstList);
  selection = new SelectionModel<Patient>(true, []);
  displayedColumns: string[] = ['select', 'position','name','age','address','mobile','homePhone'
  ,'job','trustedPersonMobile','anyPreviousSurgical',
  'diseaseState','medicalProblems','anyCureSensitivity'
  ,'sensitivityCureName','gender','pregnant' ,'pregnantMonth','breastFeeding'];


  constructor() { }

  ngOnInit(): void {
  }


  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datasource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.datasource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Patient) {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  
}


const patienstList:Patient[]=[
  {position: 1, name: 'Mostafa Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 2, name: 'Mohamed Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 3, name: 'Ahmed Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 4, name: 'Heba Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 5, name: 'Eslam Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},  {position: 1, name: 'Mostafa Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 6, name: 'Taha Alsabagh', age: 27, address: 'cairo',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 7, name: 'Mahmoud Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 8, name: 'Essam Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 9, name: 'Wael Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 10, name: 'Maher Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 11, name: 'Mostafa Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 12, name: 'Mostafa Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 13, name: 'Mostafa Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},
  {position: 14, name: 'Mostafa Alsabagh', age: 27, address: 'Tanta',mobile: '01029803456', homePhone: '0473408582', job: 'Engineer', trustedPersonMobile: '01093660093', anyPreviousSurgical: 'No',diseaseState: 'still pending ...', medicalProblems: 'No', anyCureSensitivity: 'No', sensitivityCureName: 'None', gender: 'male'},


]