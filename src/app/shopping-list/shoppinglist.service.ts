import {IngredientModel} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppinglistService {

  newIngredientAdded = new EventEmitter<IngredientModel[]>();

  private ingredients: IngredientModel[] = [new IngredientModel('Dhal', 500),
    new IngredientModel('Rice', 1000),
    new IngredientModel('Chili', 200)];

  getAllIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(newObj: IngredientModel) {
    this.ingredients.push(newObj);
    this.newIngredientAdded.emit(this.ingredients.slice());
  }

  addIngredientArray(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.newIngredientAdded.emit(this.ingredients.slice());
  }
}
