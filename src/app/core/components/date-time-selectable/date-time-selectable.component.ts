import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordion, IonAccordionGroup, IonDatetime } from '@ionic/angular';
import { Assignment } from '../../models/assignment';
import { AssignmentService } from '../../services/assignment.service';

const DATETIME_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimeSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-date-time-selectable',
  templateUrl: './date-time-selectable.component.html',
  styleUrls: ['./date-time-selectable.component.scss'],
  providers: [DATETIME_PROFILE_VALUE_ACCESSOR]
})
export class DateTimeSelectableComponent implements ControlValueAccessor {

  dateTimeSelected = '';
  isDisabled: boolean = false;
  propagateChange = (_:any) => { }

  constructor() {}
  
  /**
   * Receives the formControllerName used in the component tag
   * @param obj
   */
  writeValue(obj: any): void {
    this.dateTimeSelected = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onCancel(datetime: IonDatetime, accordion) {
    datetime.cancel();
    accordion.value = '';
  }

  onConfirm(datetime: IonDatetime, accordion) {
    datetime.confirm();
  }

  onDateTimeChanged(event, accordion: IonAccordionGroup) {
    this.dateTimeSelected = event.detail.value;
    accordion.value = '';
    this.propagateChange(this.dateTimeSelected);
  }
}