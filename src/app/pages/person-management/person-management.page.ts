import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonFormComponent } from 'src/app/core/components/person-form/person-form.component';
import { Person } from 'src/app/core/models/person';
import { AssignmentService } from 'src/app/core/services/assignment.service';
import { PersonService } from 'src/app/core/services/person.service';
import { isLowResolution } from 'src/app/utils/screen';

@Component({
  selector: 'app-person-management',
  templateUrl: './person-management.page.html',
  styleUrls: ['./person-management.page.scss'],
})
export class PersonManagementPage {

  isLowRes = isLowResolution
  mode: "Normal" | "Edit" | "Organize" = "Normal";

  constructor(
    private personService: PersonService,
    private assignmentService: AssignmentService,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  getPeopleList() {
    return this.personService.people$;
  }

  getPersonByID(id: number) {
    return this.personService.getPersonByID(id);
  }

  addPerson(person: Person) {
    return this.personService.addPerson(person);
  }

  deletePersonByID(id: number) {
    return this.personService.deletePersonByID(id);
  }

  /**
   * Opens the person form with the person object data empty/null
   */
  onNewPerson() {
    this.presentPersonForm(null);
  }

  /**
   * Opens the person form with the person object data loaded
   * @param person Person object to edit it
   */
  onEditPerson(person: Person) {
    this.presentPersonForm(person);
  }

  /**
   * If the person doesn't have task assigned, starts the onDeleteAlert
   * If the person have task assigned, a error message appears
   * @param person Person object to check the ID and pass it to the onDeleteAlert
   */
  onDeletePerson(person: Person) {
    if (!this.hasAssignedTask(person.id)) {
      this.onDeleteAlert(person);
    } else {
      this.onPersonAssignedAlert(person)
    }
  }

  /**
   * Error message for assigned people
   * @param person 
   */
  async onPersonAssignedAlert(person: Person) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'Error',
      message: person.name + ' has one or more tasks assigned',
      buttons: ['OK'],
    });
    await alert.present();
  }

  /**
   * Checks if this person has some task assigned
   * @param id ID to compare with the personId of the assignments
   * @returns True or False
   */
  hasAssignedTask(id: number) {
    var result: boolean;
    if (this.assignmentService.getAssignmentsList().find(a => a.personId == id))
      result = true;
    else {
      result = false;
    }
    return result;
  }

  /**
   * Form for person.
   * @param person Person object to modify his data or create a new one
   */
  async presentPersonForm(person: Person) {
    const modalController = await this.modalController.create({
      component: PersonFormComponent,
      componentProps: {
        person: person
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if (result && result.data) {
        switch (result.data.mode) {
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

  /**
   * Aks to delete the object Person passed by param 
   * You can cancel or confirm the delete
   * @param person Person object to delete it
   */
  async onDeleteAlert(person: Person) {
    const alert = await this.alertController.create({
      mode: 'ios',
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
            this.deletePersonByID(person.id)
          },
        },
      ],
    });
    await alert.present();
  }

  onEditMode() {
    if(this.mode == "Normal") {
      this.mode = "Edit"
    } else if(this.mode == "Edit") {
      this.mode = "Organize"
    } else {
      this.mode = "Normal"
    }
  }
}