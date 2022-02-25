import { Component } from '@angular/core';

@Component({
  selector: 'app-list-main',
  template: `
  <h1 class="text-center text-uppercase font-weight-normal">Список тезисов</h1><hr>
  <app-table></app-table>
  `,
})
export class ListMainComponent {

  constructor() {}
}
