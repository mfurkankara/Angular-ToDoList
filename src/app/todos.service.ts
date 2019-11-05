import { Injectable } from '@angular/core';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  todoslist: Todos[];


  constructor() {
    this.todoslist = [
      { name: 'Hit the gym', checked: false },
      { name: 'Pay bills', checked: true }
    ];
  }

  public getAllTodos(): Todos[] {
    return this.todoslist;
  }

  public addToList(osman) {
    this.todoslist.unshift(osman);
  }

  public removeFromList(mehmet) {
    this.todoslist.splice(mehmet, 1);

  }


}
