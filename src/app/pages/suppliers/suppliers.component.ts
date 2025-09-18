import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent } from '../../components/ui/tabs.component';
import { SupplierListComponent } from '../../components/supplier-management/supplier-list.component';
import { SupplierMapComponent } from '../../components/supplier-management/supplier-map.component';
import { SupplierStatsComponent } from '../../components/supplier-management/supplier-stats.component';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [
    CommonModule,
    DashboardHeaderComponent,
    TabsComponent,
    TabsListComponent,
    TabsTriggerComponent,
    TabsContentComponent,
    SupplierListComponent,
    SupplierMapComponent,
    SupplierStatsComponent
  ],
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {
  activeTab = 'list';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization
  }

  onTabChange(tabValue: string): void {
    this.activeTab = tabValue;
  }
}
