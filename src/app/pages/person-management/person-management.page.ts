import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-management',
  templateUrl: './person-management.page.html',
  styleUrls: ['./person-management.page.scss'],
})
export class PersonManagementPage implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  getPeopleList() {
    return this.personService.getPeopleList();
  }

  getPerson(id: number) {
    return this.personService.getPerson(id);
  }
}