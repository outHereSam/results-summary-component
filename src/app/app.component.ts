import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResultsSummaryComponent } from './components/results-summary/results-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResultsSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'results-summary';
}
