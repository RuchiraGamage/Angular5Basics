import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  status = 'active';
  name: string;
  @Output() newAccount = new EventEmitter<{name: string, status: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewAccount() {
    this.newAccount.emit({name: this.name, status: this.status});
    this.name = '';
  }
}
