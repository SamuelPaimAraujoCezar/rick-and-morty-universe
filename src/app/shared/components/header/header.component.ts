import { Component, Input } from '@angular/core';

@Component({
  selector: 'rma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() text: string;
  @Input() icon: string;
  @Input() routeUrl: string;

  constructor() { }

}
