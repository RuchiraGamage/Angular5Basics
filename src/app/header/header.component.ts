import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() routeToThisPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  routeToPage(routerPage: string) {
    this.routeToThisPage.emit(routerPage);
  }
}
