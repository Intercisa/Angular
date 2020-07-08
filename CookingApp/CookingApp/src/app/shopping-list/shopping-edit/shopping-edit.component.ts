import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';
import { ShopplinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef; //don't forgett to add FormsModule in module.ts
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingService:ShopplinglistService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingService.addIngredient(newIngredient);    

  }

}
