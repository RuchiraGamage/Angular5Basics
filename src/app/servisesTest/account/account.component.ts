import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() accountId: number;
  @Output() changedStatus = new EventEmitter<{newstate: string, id: number}>();
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(state: string) {
    this.changedStatus.emit({newstate: state, id: this.accountId});
  }
}
