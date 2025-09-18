import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', loadComponent: () => import('./pages/overview/overview.component').then(m => m.OverviewComponent) },
  { path: 'fda-forms', loadComponent: () => import('./pages/fda-forms/fda-forms.component').then(m => m.FDAFormsComponent) },
  { path: 'suppliers', loadComponent: () => import('./pages/suppliers/suppliers.component').then(m => m.SuppliersComponent) },
  { path: 'audits', loadComponent: () => import('./pages/audits/audits.component').then(m => m.AuditsComponent) },
  { path: 'findings', loadComponent: () => import('./pages/findings/findings.component').then(m => m.FindingsComponent) },
  { path: 'compliance', loadComponent: () => import('./pages/compliance/compliance.component').then(m => m.ComplianceComponent) },
  { path: 'quality', loadComponent: () => import('./pages/quality/quality.component').then(m => m.QualityComponent) },
  { path: 'documents', loadComponent: () => import('./pages/placeholder/placeholder.component').then(m => m.PlaceholderComponent) },
  { path: 'facilities', loadComponent: () => import('./pages/facilities/facilities.component').then(m => m.FacilitiesComponent) },
  { path: 'navigation', loadComponent: () => import('./pages/navigation/navigation.component').then(m => m.NavigationComponent) },
  { path: 'logistics', loadComponent: () => import('./pages/logistics/logistics.component').then(m => m.LogisticsComponent) },
  { path: 'regulatory', loadComponent: () => import('./pages/regulatory/regulatory.component').then(m => m.RegulatoryComponent) },
  { path: 'materials', loadComponent: () => import('./pages/materials/materials.component').then(m => m.MaterialsComponent) },
  { path: 'manufacturing', loadComponent: () => import('./pages/manufacturing/manufacturing.component').then(m => m.ManufacturingComponent) },
  { path: 'risk', loadComponent: () => import('./pages/risk/risk.component').then(m => m.RiskComponent) },
  { path: 'ai-analytics', loadComponent: () => import('./pages/ai-analytics/ai-analytics.component').then(m => m.AIAnalyticsComponent) },
  { path: 'documents', loadComponent: () => import('./pages/documents/documents.component').then(m => m.DocumentsComponent) },
];
