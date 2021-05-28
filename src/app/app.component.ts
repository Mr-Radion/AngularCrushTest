import { Component } from '@angular/core';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Component({
  // название тега в html куда вставляется данный модуль
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-crush-test';
  // передаем метод с массивом для использования в todos.components.ts и внутрь app.components.html
  public todos: ToDo[] = [
    { id: 1, title: 'Карма рулит', completed: false, date: new Date() },
    { id: 2, title: 'Та еще сучка', completed: true, date: new Date() },
    { id: 3, title: '7 раз отмерь', completed: false, date: new Date() },
  ];

  onToggle(id: number) {
    const idx = this.todos.findIndex((t) => t.id === id);
    this.todos[idx].completed = this.todos[idx].completed;
  }
}
