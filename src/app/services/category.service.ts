import { Injectable } from '@angular/core';
import { Category } from '../../ICategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = `http://localhost:3000/categories`;

  constructor() {}

  async getAllCategories(): Promise<Category[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
