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
  schoolCreated = false
  schools = ['Escola 1', 'Escola 2']

  ngOnInit(): void {
    setTimeout(() => {
      this.addSchool = true;
    }, 3000);
  }


  createSchool() {
    this.schoolCreated = true
    this.createdSchoolStatus = 'Escola criada com o nome de ' + this.schoolName
    this.schools.push(this.schoolName)
  }

  updateSchoolName(event: Event) {
    this.schoolName = (<HTMLInputElement>event.target).value;
  }
}
