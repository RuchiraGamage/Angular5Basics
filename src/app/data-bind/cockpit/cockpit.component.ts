import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onServerCreated = new EventEmitter<{serverName: string , serverContent: string}>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onBlueprintCreated = new EventEmitter<{serverName: string , serverContent: string}>();

  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') newServerContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput) {
    console.log(nameInput.value);
    this.onServerCreated.emit({serverName: nameInput.value , serverContent: this.newServerContentInput.nativeElement.value});
  }

  onAddBlueprint() {
    this.onBlueprintCreated.emit({serverName: this.newServerName , serverContent: this.newServerContent});
  }
}
