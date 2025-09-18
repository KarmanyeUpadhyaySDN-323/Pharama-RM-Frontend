import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent } from '../../components/ui/tabs.component';
import { AIInsightsComponent } from '../../components/ai-analytics/ai-insights.component';
import { PredictiveAnalyticsComponent } from '../../components/ai-analytics/predictive-analytics.component';
import { AIRecommendationsComponent } from '../../components/ai-analytics/ai-recommendations.component';

@Component({
  selector: 'app-ai-analytics',
  standalone: true,
  imports: [
    CommonModule,
    DashboardHeaderComponent,
    TabsComponent,
    TabsListComponent,
    TabsTriggerComponent,
    TabsContentComponent,
    AIInsightsComponent,
    PredictiveAnalyticsComponent,
    AIRecommendationsComponent
  ],
  templateUrl: './ai-analytics.component.html',
  styleUrls: ['./ai-analytics.component.scss']
})
export class AIAnalyticsComponent implements OnInit {
  activeTab = 'insights';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization
  }

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
}
