import {Component, Input, OnInit} from '@angular/core';
import {RecipeItemComponent} from '../recipe-list/recipe-item/recipe-item.component';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeObject: RecipeModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipeObject);
  }

}
