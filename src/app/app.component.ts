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
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultPage = 'recipe';

  accountArray = [{name: 'Ruchira', status: 'active'}, {name: 'Lahiru', status: 'active'}];
  // serverElements = [{type: 'server', name: 'server1', content: 'just to test'}];
  //
  // serverCreated(serverData: {serverName: string , serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }
  //
  // blueprintCreated(blueprintData: {serverName: string , serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }
  routing(page: string) {
    this.defaultPage = page;
  }

  addNewAcc(newacc: { name: string; status: string }) {
    this.accountArray.push(newacc);
  }

  changeStatusofAccount(chngedAcc: { newstate: string; id: number }) {
    this.accountArray[chngedAcc.id].status = chngedAcc.newstate;
    console.log(this.accountArray[chngedAcc.id].status );
  }
}
