import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}

  readonly environment = environment;
  public isCollapsed = true;
}
