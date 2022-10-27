import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../models/person';
import { isLowResolution, isLowResolutionSliding as isLowResSlide } from 'src/app/core/utils/screen';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() person: Person;
  @Input() peopleList: Person[]
  @Input() mode: String;
  closeIfLowRes = isLowResSlide
  isLowRes = isLowResolution

  constructor() { }

  /**
   * Event that emits the Person object to the father to update it
   */
  onEditPerson(){
    this.onEdit.emit(this.person);
  }

  /**
   * Event that emits the Person object to the father to delete it
   */
  onDeletePerson(){
    this.onDelete.emit(this.person);
  }

  /**
   * 
   * @param ev DONT WORK
   */
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
}