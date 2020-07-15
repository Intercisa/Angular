import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShopplinglistService{

   ingredientChanged = new Subject<Ingredient[]>();

   private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }   

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.emitChanged();
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.emitChanged();

    }

    private emitChanged(){
        this.ingredientChanged.next(this.ingredients.slice());
    }


}