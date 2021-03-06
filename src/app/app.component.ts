// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app' ;
// }

// .......................................................................
// main working app

// import {Component, OnInit} from '@angular/core';
// import {AccountService} from './account.service';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//
//   defaultPage = 'recipe';
//
//   constructor(private accountService: AccountService) {
//   }
//
//   ngOnInit() {
//   }
//   routing(page: string) {
//     this.defaultPage = page;
//   }
// }

// ....................................................................................
// routing tutorial related content

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}



// ..................................................................................
//
// export class AppComponent implements OnInit {
//
//   defaultPage = 'recipe';
//
//   accountArray = [];
//
//   constructor(private accountService: AccountService) {
//   }
//
//   ngOnInit() {
//     this.accountArray = this.accountService.getAccount();
//   }
//   serverElements = [{type: 'server', name: 'server1', content: 'just to test'}];
//
//   serverCreated(serverData: {serverName: string , serverContent: string}) {
//     this.serverElements.push({
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });
//   }
//
//   blueprintCreated(blueprintData: {serverName: string , serverContent: string}) {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: blueprintData.serverName,
//       content: blueprintData.serverContent
//     });
//   }
//   routing(page: string) {
//     this.defaultPage = page;
//   }
// }
