import { Component, Input } from '@angular/core';
import { Category } from '../../../ICategory';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  @Input() category: Category = {
    id: '',
    category: '',
    score: 0,
    icon: '',
  };
}
