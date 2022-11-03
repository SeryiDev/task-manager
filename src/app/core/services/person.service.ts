import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService implements OnDestroy {

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
      nickname:'Nose'
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
      nickname:'Toni'
    },
    {
      id: 5, 
      name: 'Gonzalo José', 
      surname: 'Salmerón',
      nickname:'Gonza'
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
      nickname:'Rapao'
    },
    {
      id: 8, 
      name: 'Rubén', 
      surname: 'Díaz',
      nickname:'Pocholo'
    },
    {
      id: 9, 
      name: 'Natalia', 
      surname: 'Contreras',
      nickname:'Naty'
    },
    {
      id: 10, 
      name: 'Nesrin', 
      surname: 'Edwan',
      nickname:'Nisi'
    }
  ]

  private _peopleSubject: BehaviorSubject<Person[]> = new BehaviorSubject(this._peopleList);
  public people$ = this._peopleSubject.asObservable();
  id: number = this._peopleList.length + 1

  constructor() { }

  ngOnDestroy(): void {
    this._peopleSubject.complete(); // Avoid leaks of data
  }

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
    this._peopleSubject.next(this._peopleList)
  }

  /**
   * Removes the person found with the ID passed by param
   * @param id ID to filter the person
   */
  deletePersonByID(id: number) {
    this._peopleList = this._peopleList.filter(p => p.id != id)
    this._peopleSubject.next(this._peopleList)
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
    this._peopleSubject.next(this._peopleList)
  }
}