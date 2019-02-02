import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-element',
  templateUrl: './error-element.component.html',
  styleUrls: ['./error-element.component.scss']
})
export class ErrorElementComponent {

  @Input ('error') error

  constructor() { }

}
