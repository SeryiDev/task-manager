import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonFormComponent } from 'src/app/components/person-form/person-form.component';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-management',
  templateUrl: './person-management.page.html',
  styleUrls: ['./person-management.page.scss'],
})
export class PersonManagementPage {

  constructor(
    private personService: PersonService, 
    private alertController: AlertController,
    private modalController: ModalController
    ) { }

  getPeopleList() {
    return this.personService.getPeopleList();
  }

  getPerson(id: number) {
    return this.personService.getPersonById(id);
  }

  addPerson(person: Person) {
    return this.personService.addPerson(person);
  }

  // Opens the new person or modify person form
  async presentPersonForm(person:Person){
    const modalController = await this.modalController.create({
      component:PersonFormComponent,
      componentProps:{
        person:person
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.personService.addPerson(result.data.person);
            break;
          case 'Edit':
            this.personService.updatePerson(result.data.person);
            break;
          default:
        }
      }
    });
  }

  onNewPerson(){
    this.presentPersonForm(null);  
  }

  onEditPerson(person){
    this.presentPersonForm(person);
  }

  deletePersonById(id: number) {
    return this.personService.deletePersonById(id);
  }

  async onDeleteAlert(person: Person) {
    const alert = await this.alertController.create({
      header: '¿Are you sure you want to delete ' + person.name + '?',
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