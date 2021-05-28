import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../app.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  // декоратор принимающий данные todos из вышестоящего app.component.ts, указываем переменную, которую хотим получить
  @Input() todos: ToDo[] = [];
  // аутпутить опр события 
  @Output() onToggle = new EventEmitter<number>()

  constructor() {}
  ngOnInit(): void {}

  onChange(id: number) {
    this.onToggle.emit(id) 
  }
}
