import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-management',
  templateUrl: './person-management.page.html',
  styleUrls: ['./person-management.page.scss'],
})
export class PersonManagementPage implements OnInit {

  constructor(
    private personService: PersonService, 
    private alertController: AlertController
    ) { }

  ngOnInit() {
  }

  getPeopleList() {
    return this.personService.getPeopleList();
  }

  getPerson(id: number) {
    return this.personService.getPersonById(id);
  }

  addPerson(person: Person) {
    return this.personService.addPerson(person);
  }

  deletePersonById(id: number) {
    return this.personService.deletePersonById(id);
  }

  async onDeleteAlert(person: Person) {
    const alert = await this.alertController.create({
      header: '¿Está seguro de eliminar la persona?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.deletePersonById(person.id)
          },
        },
      ],
    });

    await alert.present();
  }
}