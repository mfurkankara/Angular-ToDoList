import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todos } from '../todos';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todolist: Todos[];
  deneeff
  constructor(private todolistservice: TodosService) { }

  // public GetAll() {
  //   this.todolist = this.todolistservice.GetAllTodos();
  //   console.log(this.todolist);
  // }

  ngOnInit() {
    this.todolist = this.todolistservice.getAllTodos();
  }

  AddToDoo(newtodo) {
    if (newtodo === '') {
      return false;
    } else {
      const a = new Todos();
      a.name = newtodo;
      this.todolistservice.addToList(a);
      console.log(newtodo);

      const inputValue = document.querySelector('input')
      inputValue.value = '';
      inputValue.focus();
    }
  }

  remove(item) {
    const b = this.todolist.indexOf(item);
    this.todolistservice.removeFromList(b);
    console.log(b);
  }

  checked(item) {
    if (item.checked === true) {
      item.checked = false;
      const i = this.todolist.indexOf(item);
      this.todolist.splice(i, 1);
      this.todolist.unshift(item)
    } else {
      item.checked = true;
      const j = this.todolist.indexOf(item);
      this.todolist.splice(j, 1);
      this.todolist.push(item);
    }
  }

}
