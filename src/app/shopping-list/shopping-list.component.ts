import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [new IngredientModel('Dhal', 500),
    new IngredientModel('Rice', 1000),
    new IngredientModel('Chili', 200)];

  constructor() { }

  ngOnInit(): void {
  }

  addNewIngredient(newIngredient: IngredientModel) {
    this.ingredients.push(newIngredient);
  }
}
