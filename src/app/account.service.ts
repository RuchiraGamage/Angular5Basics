import {LoggingService} from './logging.service';
import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class AccountService {
  accountArray = [{name: 'Ruchira', status: 'active'}, {name: 'Lahiru', status: 'active'}];
  updatedStatus = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { // loggingService is injected as dependency injection by angular
  }

  public getAccount() {
    return this.accountArray;
  }

  public AddAccount(acc: {name: string, status: string}) {
    this.loggingService.logging('new account created name : ' + acc.name + ' status : ' + acc.status);
    this.accountArray.push(acc);
  }

  public updateAccount(newState: string, id: number ) {
    this.loggingService.logging('updated account id : ' + id + ' to new status : ' + newState);
    this.accountArray[id].status = newState ;
  }
}
