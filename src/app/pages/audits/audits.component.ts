import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent } from '../../components/ui/tabs.component';
import { UpcomingAuditsListComponent } from '../../components/audit-schedule/upcoming-audits-list.component';
import { CompletedAuditsListComponent } from '../../components/audit-schedule/completed-audits-list.component';
import { AuditCalendarComponent } from '../../components/audit-schedule/audit-calendar.component';

@Component({
  selector: 'app-audits',
  standalone: true,
  imports: [
    CommonModule,
    DashboardHeaderComponent,
    TabsComponent,
    TabsListComponent,
    TabsTriggerComponent,
    TabsContentComponent,
    UpcomingAuditsListComponent,
    CompletedAuditsListComponent,
    AuditCalendarComponent
  ],
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent implements OnInit {
  activeTab = 'upcoming';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization
  }

  onTabChange(tabValue: string): void {
    this.activeTab = tabValue;
  }
}
