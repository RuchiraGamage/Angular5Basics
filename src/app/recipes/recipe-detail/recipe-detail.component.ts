import {Component, Input, OnInit} from '@angular/core';
import {RecipeItemComponent} from '../recipe-list/recipe-item/recipe-item.component';
import {RecipeModel} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppinglistService} from '../../shopping-list/shoppinglist.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeObject: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.recipeService.addAllIngredients(this.recipeObject.ingredients);
  }
}
