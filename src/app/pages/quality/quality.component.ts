import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { QualityOverviewCardsComponent } from '../../components/quality/quality-overview-cards.component';
import { QualityKPIsComponent } from '../../components/quality/quality-kpis.component';

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [
    CommonModule,
    DashboardHeaderComponent,
    QualityOverviewCardsComponent,
    QualityKPIsComponent
  ],
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization
  }
}
