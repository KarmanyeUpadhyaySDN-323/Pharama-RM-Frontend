import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { FindingsStatsComponent } from '../../components/findings/findings-stats.component';
import { FindingsListComponent } from '../../components/findings/findings-list.component';

@Component({
  selector: 'app-findings',
  standalone: true,
  imports: [
    CommonModule,
    DashboardHeaderComponent,
    FindingsStatsComponent,
    FindingsListComponent
  ],
  templateUrl: './findings.component.html',
  styleUrls: ['./findings.component.scss']
})
export class FindingsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization
  }
}
