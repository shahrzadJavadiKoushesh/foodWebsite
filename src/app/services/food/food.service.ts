import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods():String[]{
    return [
      '/assets/images/food-1.jpg',
      '/assets/images/food-2.jpg',
      '/assets/images/food-3.jpg',
      '/assets/images/food-4.jpg',
      '/assets/images/food-5.jpg',
      '/assets/images/food-6.jpg',
    ]
  }
}
