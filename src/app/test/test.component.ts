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

  // onlyOdd = false;
  // oddNumbers = [1, 3, 5];
  // evenNmbers = [2, 4, 6];
  // numberformatinstructionpara = 'only show odd numbers'
  // nuber = 5;

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

  // numberformatchange() {
  //   this.onlyOdd = !this.onlyOdd;
  //   if (this.onlyOdd){
  //     this.numberformatinstructionpara = 'only show even numbers';
  //   } else {
  //     this.numberformatinstructionpara = 'only show odd numbers ' ;
  //   }
  // }
}
