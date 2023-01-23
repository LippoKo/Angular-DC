import { Component } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styles: [`
    .aberta { color: white }
  `]

})
export class SchoolComponent {
  schoolId = 10;
  schoolName = ''
  newName = 'Tijolin'
  schoolSituation = 'aberta'

  constructor() {
    this.schoolSituation = Math.random() > 0.5 ? 'aberta' : 'fechada'
  }

  getName() {
    return this.newName;
  }

  getStatusColor() {
    return this.schoolSituation === 'aberta' ? 'green' : 'red'
  }

  updateSchoolName(event: Event) {
    this.schoolName = (<HTMLInputElement>event.target).value;
  }

}