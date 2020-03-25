import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  allowNewServer = false;
  serverStatus = 'no server created yet';
  newServerCreation = false;
  serverName = '';
  label = '';
  showServerNameClicked = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  allowNewServerChangeState() {
    // tslint:disable-next-line:triple-equals
    if (this.allowNewServer == true) {
      this.allowNewServer = false;
    } else {
      this.allowNewServer = true;
    }
  }

  createServer() {
    this.serverStatus = 'server has created';
    this.newServerCreation = true;
  }

  mouseHoverOnButton() {
    console.log('click on this');
  }

  autoUpdateServerName($event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  showServerName() {
    this.showServerNameClicked = true;
    this.label = this.serverName;
  }

  getBackgroundColour() {
    return this.showServerNameClicked === true ? 'green' : 'red' ;
  }
}
