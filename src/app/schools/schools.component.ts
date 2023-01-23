import { Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})


export class SchoolsComponent {

  addSchool = false;
  createdSchoolStatus = 'Nenhuma escola foi criada!'
  schoolName = 'Nome da Escola'

  ngOnInit(): void {
    setTimeout(() => {
      this.addSchool = true;
    }, 3000);
  }


  createSchool() {
    this.createdSchoolStatus = 'Escola criada com o nome de ' + this.schoolName
  }

  updateSchoolName(event: Event) {
    this.schoolName = (<HTMLInputElement>event.target).value;
  }
}
