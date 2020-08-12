import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
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

  constructor(private shoppingService: ShopplinglistService, private logging:LoggingService) { }
  
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientChanged.subscribe((ingerdinets:Ingredient[])=>{
      this.ingredients = ingerdinets;
    });

    this.logging.printLog('Hello World, from ShoppingListComponent')
  }

  onEditItem(index:number){
    this.shoppingService.startedEditing.next(index); // now we can listen to this on some other palce 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
