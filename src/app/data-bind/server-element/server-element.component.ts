import {Component, Input, OnInit, OnChanges, SimpleChange, DoCheck, ContentChild, ElementRef, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit {

  @Input() element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph') contentPara: ElementRef;

  constructor() {
    console.log('constructor call');
  }

  // @ts-ignore
  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges call');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit call');
    // console.log('content paragraph : ' + this.contentPara.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit call');
    console.log('content paragraph : ' + this.contentPara.nativeElement.textContent);
  }

}
