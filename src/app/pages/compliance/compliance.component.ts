import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { ButtonComponent } from '../../components/ui/button.component';
import { ComplianceOverviewCardsComponent } from '../../components/compliance/compliance-overview-cards.component';
import { ComplianceMetricsComponent } from '../../components/compliance/compliance-metrics.component';
import { CertificationsLicensesComponent } from '../../components/compliance/certifications-licenses.component';

@Component({
  selector: 'app-compliance',
  standalone: true,
  imports: [
    CommonModule,
    DashboardHeaderComponent,
    ButtonComponent,
    ComplianceOverviewCardsComponent,
    ComplianceMetricsComponent,
    CertificationsLicensesComponent
  ],
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss']
})
export class ComplianceComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization
  }

  onGenerateReport(): void {
    console.log('Generating compliance report');
    // Handle generate report logic here
  }
}
