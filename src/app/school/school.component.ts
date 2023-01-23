import { Component } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html'

})
export class SchoolComponent {
  schoolId = 10;
  schoolName = 'Henrrique de souza'
  newName = 'Tijolin'

  getName() {
    return this.newName;
  }

}