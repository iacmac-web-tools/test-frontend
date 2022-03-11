import { Component, Input } from '@angular/core';
import { PersonResource } from '../personresource';

@Component({
  selector: 'app-person-resource-form',
  templateUrl: './person-resource-form.component.html',
  styleUrls: ['./person-resource-form.component.css']
})

export class PersonResourceFormComponent {
  @Input() visibility : boolean
}
