import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountService} from '../../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() accountId: number;
  constructor( private accountService: AccountService) { }

  ngOnInit(): void {
  }

  changeStatus(state: string) {
    this.accountService.updateAccount(state, this.accountId);
    this.accountService.updatedStatus.emit(state);
  }
}
