import { Injectable } from '@angular/core';
import { Person } from '../models/person';

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
      image: 'http://drive.google.com/uc?export=view&id=1hypbmSb9Wfn-VIGLzXcwoQHXoD_AfyDI'
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

  id: number = this._peopleList.length + 1

  constructor() { }

  /**
   * Gets the people list
   * @returns List of the Person object
   */
  getPeopleList() {
    return this._peopleList;
  }

  /**
   * Finds the person with the ID passed by param
   * @param id ID to find the person
   * @returns Person object found by the ID
   */
  getPersonByID(id: number) {
    return this._peopleList.find(p => p.id == id)
  }

  /**
   * Adds one person to the Person object list
   * @param person Person object to add to the list
   */
  addPerson(person: Person) {
    person.id = this.id++
    this._peopleList.push(person)
  }

  /**
   * Removes the person found with the ID passed by param
   * @param id ID to filter the person
   */
  deletePersonByID(id: number) {
    this._peopleList = this._peopleList.filter(p => p.id != id)
  }

  /**
   * Updates the data of the person found by the ID
   * @param person Person object to update the data
   */
  updatePerson(person:Person) {
    let _person = this._peopleList.find(p => p.id == person.id);
    if(_person) {
      _person.name = person.name;
      _person.surname = person.surname;
      _person.nickname = person.nickname;
      _person.image = person.image;
    }
  }
}