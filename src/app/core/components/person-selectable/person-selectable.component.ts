import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';

const PERSON_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PersonSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-person-selectable',
  templateUrl: './person-selectable.component.html',
  styleUrls: ['./person-selectable.component.scss'],
  providers: [PERSON_PROFILE_VALUE_ACCESSOR]
})
export class PersonSelectableComponent implements ControlValueAccessor{

  personSelected: Person = null;
  isDisabled: boolean = false;
  propagateChange = (_:any) => { }

  constructor(
    private personService: PersonService
  ) { }

  /**
   * Receives the formControllerName used in the component tag
   * @param personId ID of the person received by the assignment form
   */
  writeValue(personId: any): void {
    this.personSelected = this.personService.getPersonByID(personId)
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getPeopleList() {
    return this.personService.getPeopleList();
  }

  onPersonClick(person: Person, accordion: IonAccordionGroup) {
    this.personSelected = person;
    accordion.value = '';
    this.propagateChange(this.personSelected.id); // Propagates the new ID
  }
}