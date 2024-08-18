import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../../ICategory';

@Component({
  selector: 'app-results-overview',
  standalone: true,
  imports: [],
  templateUrl: './results-overview.component.html',
  styleUrl: './results-overview.component.css',
})
export class ResultsOverviewComponent {
  score: number = 0;
  categoryService: CategoryService = inject(CategoryService);

  constructor() {
    this.categoryService.getAllCategories().then((categories: Category[]) => {
      console.log(categories);
      let totalScore = 0;
      categories.forEach((category) => {
        totalScore += category.score;
      });
      this.score = Math.floor(totalScore / categories.length);
    });
  }
}
