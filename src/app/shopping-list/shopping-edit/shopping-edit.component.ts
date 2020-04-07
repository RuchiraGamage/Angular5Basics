import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newIngredient = new EventEmitter<IngredientModel>();
  @ViewChild('name') newIngredientName: ElementRef;
  @ViewChild('amount') newIngredientAmount: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addNewIngredient() {
    this.newIngredient.emit(new IngredientModel(this.newIngredientName.nativeElement.value, this.newIngredientAmount.nativeElement.value));
  }
}
