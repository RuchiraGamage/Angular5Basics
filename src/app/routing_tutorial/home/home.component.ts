import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  loadServers(id: number) {
    // some complex calculations
    // this.route.navigate(['/servers', id, 'edit'], {queryParams: { allowEdit: '1'}, fragment: 'loading'}); // absolute path

    // if want to work with relative path we can do that by giving extra js object to navigate method using active Route
    // this.route.navigate(['servers'], {relativeTo:  this.activeRoute}); // relative path
  }

}
