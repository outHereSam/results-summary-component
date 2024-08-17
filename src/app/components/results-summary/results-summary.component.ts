import { Component } from '@angular/core';
import { ResultsOverviewComponent } from '../results-overview/results-overview.component';
import { SummaryBreakdownComponent } from '../summary-breakdown/summary-breakdown.component';

@Component({
  selector: 'app-results-summary',
  standalone: true,
  imports: [ResultsOverviewComponent, SummaryBreakdownComponent],
  templateUrl: './results-summary.component.html',
  styleUrl: './results-summary.component.css',
})
export class ResultsSummaryComponent {}
