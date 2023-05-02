import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links = [
    {title: 'Просмотр', fragment: "view-theses"},
    {title: 'Создание', fragment: "create"},
  ]
  constructor(public route: ActivatedRoute) {}

  readonly environment = environment;
  public isCollapsed = true;
}
