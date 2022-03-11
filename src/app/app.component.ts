import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="wrapper">
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/all-thesises-form">Список тезисов </a>
      <a routerLink="/thesis-form">Добавить тезис </a>
    </nav>
    <router-outlet></router-outlet>
  </div>`
})

export class AppComponent implements OnInit {
  title = 'Angular Test Task';

  constructor() { }

  ngOnInit() { }

}