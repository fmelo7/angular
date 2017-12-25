import { Component, OnInit, Input } from '@angular/core';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() appTitle: string;

  routeList = routes;

  collapseMenu = true;

  constructor() { }

  ngOnInit() { }

}
