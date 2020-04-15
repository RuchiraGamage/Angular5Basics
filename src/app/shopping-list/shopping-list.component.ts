import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppinglistService} from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[];

  constructor(private shopService: ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients = this.shopService.getAllIngredients();

    this.shopService.newIngredientAdded.subscribe(
      (updatedArray: IngredientModel[]) => {
        this.ingredients = updatedArray;
      }
    );
  }
}
