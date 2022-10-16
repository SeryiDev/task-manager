import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent {

  form: FormGroup;
  mode: "New" | "Edit" = "New";

  @Input('person') set person(person: Person) {
    if (person) {
      this.form.controls.id.setValue(person.id);
      this.form.controls.name.setValue(person.name);
      this.form.controls.surname.setValue(person.surname);
      this.form.controls.nickname.setValue(person.nickname);
      this.form.controls.image.setValue(person.image);
      this.mode = "Edit";
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      nickname: ['', [Validators.required]],
      image: ['']
    });
  }

  onSubmit() {
    this.modalController.dismiss({ person: this.form.value, mode: this.mode }, 'ok');
  }

  onDismiss() {
    this.modalController.dismiss();
  }
}