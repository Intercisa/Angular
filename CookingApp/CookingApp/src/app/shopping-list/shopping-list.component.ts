import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShopplinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[] = [];
  private subscription: Subscription;

  constructor(private shoppingService: ShopplinglistService) { }
  
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientChanged.subscribe((ingerdinets:Ingredient[])=>{
      this.ingredients = ingerdinets;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
