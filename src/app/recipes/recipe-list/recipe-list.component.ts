import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  // tslint:disable-next-line:no-output-rename
  @Output() currentRecipeModel = new EventEmitter<RecipeModel>();
  // @Output() currentRecipeModel = new EventEmitter<{name: string, desc: string, imageUrl: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  showInDescription(i: number) {
    this.currentRecipeModel.emit(this.recipes[i]);
    // this.currentRecipeModel.emit({name: this.recipes[i].name, desc: this.recipes[i].description, imageUrl:this.recipes[i].imageUrl});
  }
}
