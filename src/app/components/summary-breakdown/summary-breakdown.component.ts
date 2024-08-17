import { Component, inject } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../../ICategory';

@Component({
  selector: 'app-summary-breakdown',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './summary-breakdown.component.html',
  styleUrl: './summary-breakdown.component.css',
})
export class SummaryBreakdownComponent {
  categories: Category[] = [];
  categoryService: CategoryService = inject(CategoryService);

  constructor() {
    this.categoryService.getAllCategories().then((categories: Category[]) => {
      this.categories = categories;
    });
  }
}
