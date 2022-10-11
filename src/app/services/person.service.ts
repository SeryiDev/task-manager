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
      nickname:'SeryiDev',
      image: 'https://imgs.search.brave.com/Slwld_uZmt1XZjWrwlZtdlgPZJola-dViGxrLYb1KHA/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvcGVvcGxlLWF2/YXRhci1mbGF0LTEv/NjQvZ2xhc3Nlc19i/dXNpbmVzc21hbl9w/ZW9wbGVfbWFsZV9t/YW5fYXZhdGFyX2Js/b25kZS01MTIucG5n'
    },
    {
      id: 2, 
      name: 'Hanane', 
      surname: 'Arrazouki',
      nickname:'No nickname'
    },
    {
      id: 3, 
      name: 'Juan Antonio', 
      surname: 'García',
      nickname:'Arrow'
    },
    {
      id: 4, 
      name: 'Antonio', 
      surname: 'Suárez',
      nickname:'No nickname'
    },
    {
      id: 5, 
      name: 'Gonzalo José', 
      surname: 'Salmerón',
      nickname:'No nickname'
    },
    {
      id: 6, 
      name: 'Raúl', 
      surname: 'Vargas',
      nickname:'El Mirlo'
    },
    {
      id: 7, 
      name: 'Adrián', 
      surname: 'Dueñas',
      nickname:'No nickname'
    },
    {
      id: 8, 
      name: 'Rubén', 
      surname: 'Díaz',
      nickname:'No nickname'
    },
    {
      id: 9, 
      name: 'Natalia', 
      surname: 'Contreras',
      nickname:'No nickname'
    },
    {
      id: 10, 
      name: 'Nesrin', 
      surname: 'Edwan',
      nickname:'No nickname'
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