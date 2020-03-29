import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('test recipe 1', 'test recipe 1 description',
      'https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry.jpg'),
    new RecipeModel('test recipe 2', 'test recipe 2 description',
      'https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
