import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RecipeModel } from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getAllRecipes();
  }

  showInDescription(i: number) {
    this.recipeService.clickedRecipe.emit(this.recipes[i]);
    // this.currentRecipeModel.emit(this.recipes[i]);
    // this.currentRecipeModel.emit({name: this.recipes[i].name, desc: this.recipes[i].description, imageUrl:this.recipes[i].imageUrl});
  }
}
