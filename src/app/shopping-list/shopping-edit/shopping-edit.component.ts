import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppinglistService} from '../shoppinglist.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') newIngredientName: ElementRef;
  @ViewChild('amount') newIngredientAmount: ElementRef;

  constructor(private shopService: ShoppinglistService) { }

  ngOnInit(): void {
  }

  addNewIngredient() {
    // tslint:disable-next-line:max-line-length
    this.shopService.addNewIngredient(new IngredientModel(this.newIngredientName.nativeElement.value, this.newIngredientAmount.nativeElement.value));
  }
}
