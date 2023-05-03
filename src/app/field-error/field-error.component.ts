import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent {
  @Input() control?: FormControl;

  isControlInvalid = () => this.control !== undefined && this.control.invalid && (this.control.dirty || this.control.touched);
}
