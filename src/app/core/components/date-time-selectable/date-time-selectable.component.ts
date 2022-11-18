import { Component, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

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
export class DateTimeSelectableComponent implements ControlValueAccessor, OnDestroy {

  isDisabled: boolean = false;
  hasValue: Boolean = false;
  propagateChange = (_:any) => { };
  private _dateSubject = new BehaviorSubject(this.formatDate(moment()));
  public date$ = this._dateSubject.asObservable();

  constructor() {}
  
  ngOnDestroy() {
    this._dateSubject.complete();
  }

  /**
   * Returns a date formatted into 'YYYY-MM-DDTHH:mmZ' format
   * @param date 
   * @returns 
   */
  formatDate(date: moment.Moment) {
    return date.format('YYYY-MM-DDTHH:mmZ')
  }

  /**
   * Receives the formControllerName used in the component tag
   * @param obj
   */
  writeValue(obj: any): void {
    if(obj) {
      this.hasValue = true;
      this._dateSubject.next(this.formatDate(moment(obj)));
    }
    
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onCancel(datetime: IonDatetime, accordion: IonAccordionGroup) {
    datetime.cancel();
    accordion.value = '';
  }

  onConfirm(datetime: IonDatetime) {
    datetime.confirm();
  }

  onDateTimeChanged(event, accordion: IonAccordionGroup) {
    setTimeout(() => {
      let newDate = this.formatDate(moment(event.detail.value))
      if (newDate !== this._dateSubject.getValue()) {
        this.hasValue = true;
        this._dateSubject.next(newDate);
        accordion.value = '';
        this.propagateChange(newDate);
      }
    }, 100)
  }
}