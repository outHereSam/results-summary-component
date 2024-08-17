import { Injectable } from '@angular/core';
import { Category } from '../../ICategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  protected categories: Category[] = [];

  constructor() {}

  getAllCategories(): Category[] {
    return this.categories;
  }
}
