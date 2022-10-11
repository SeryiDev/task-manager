import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private _peopleList: Person[] = [
    {
      id: 1, 
      name: 'Sergio', 
      surname: 'García', 
      nickname:'SeryiGG',
    },
    {
      id: 2, 
      name: 'Hanane', 
      surname: 'Arrazouki'
    },
    {
      id: 3, 
      name: 'Verónica', 
      surname: 'González'
    },
    {
      id: 4, 
      name: 'Juan Antonio', 
      surname: 'García'
    },
    {
      id: 5, 
      name: 'Gonzalo José', 
      surname: 'Salmerón'
    },
    {
      id: 6, 
      name: 'Raúl', 
      surname: 'Vargas'
    },
    {
      id: 7, 
      name: 'Adrián', 
      surname: 'Dueñas'
    },
    {
      id: 8, 
      name: 'Rubén', 
      surname: 'Díaz'
    },
    {
      id: 9, 
      name: 'Natalia', 
      surname: 'Contreras'
    },
    {
      id: 10, 
      name: 'Nesrin', 
      surname: 'Edwan'
    }
  ]

  constructor() { }

  getPeopleList() {
    return this._peopleList;
  }

  getPerson(id: number) {
    return this.getPeopleList().find(p => p.id == id)
  }
}