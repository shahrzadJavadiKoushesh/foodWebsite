import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags():Tag[]{
    return [
      {name: "All", count: 14},
      {name: "FastFood", count: 4},
      {name: "Pizza", count: 2},
      {name: "Lunch", count: 3},
      {name: "SlowFood", count: 2},
      {name: "Hamburger", count: 1},
      {name: "Fry", count: 1},
      {name: "Soup", count: 1},
    ]
  }

  getAllFoodsByTag(tag: string): Food[] {
    if (tag == "All")
      return this.getAllFoods();
    else
      return tag == "All" ? this.getAllFoods() : this.getAllFoods().filter(food => food.tags?.includes(tag))
  }

  getAllFoodsBySearchTerms(searchTerm:string): Food[]{
    return this.getAllFoods().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllFoods(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
}
