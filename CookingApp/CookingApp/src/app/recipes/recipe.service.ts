import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopplinglistService } from '../shopping-list/shopping-list.service';


@Injectable({
    providedIn: 'root'
})
export class RecipeService {

constructor(private shoppingService:ShopplinglistService){
}
   private recipes: Recipe[] = [
        new Recipe('A Steak',
        'This is simply a test',
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
        new Recipe('A hamburger',
        'This is also simply a test',
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 3)
        ])
      ];

      getRecipes(){
          return this.recipes.slice(); //slice will return a new array copy
      }
      

      getRecipeById(index:number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingService.addIngredients(ingredients);
      }


}