import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoggingService} from '../../logging.service';
import {AccountService} from '../../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {

  status = 'active';
  name: string;
  buttonText = 'Set Type';

  constructor( private accountService: AccountService) {
    accountService.updatedStatus.subscribe(
      (status: string) => alert('status changed to : ' + status)
    );
  }

  ngOnInit(): void {
  }

  addNewAccount() {
    this.accountService.AddAccount({name: this.name, status: this.status});
    this.name = '';
  }

  statusChanged(status: string) {
    this.status = status;
    this.buttonText = status;
  }
}
