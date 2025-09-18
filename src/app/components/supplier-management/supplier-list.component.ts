import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent } from '../ui/card.component';
import { ButtonComponent } from '../ui/button.component';
import { InputComponent } from '../ui/input.component';
import { BadgeComponent } from '../ui/badge.component';
import { ScrollAreaComponent } from '../ui/scroll-area.component';
import { SelectComponent, SelectTriggerComponent, SelectContentComponent, SelectItemComponent } from '../ui/select.component';

export interface Supplier {
  id: string;
  name: string;
  type: string;
  location: string;
  compliance: "compliant" | "warning" | "non-compliant";
  contact: string;
  certificate: string;
  lastAudit: string;
  riskLevel: "low" | "medium" | "high";
}

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardContentComponent,
    CardHeaderComponent,
    CardTitleComponent,
    ButtonComponent,
    InputComponent,
    BadgeComponent,
    ScrollAreaComponent,
    SelectComponent,
    SelectTriggerComponent,
    SelectContentComponent,
    SelectItemComponent
  ],
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent {
  searchTerm = '';
  filterType = 'all';

  suppliers: Supplier[] = [
    {
      id: "1",
      name: "PharmaCorp Ltd",
      type: "API Manufacturer",
      location: "Boston, MA, USA",
      compliance: "compliant",
      contact: "john.smith@pharmacorp.com",
      certificate: "ISO 9001:2015",
      lastAudit: "2024-11-15",
      riskLevel: "low",
    },
    {
      id: "2",
      name: "MedSupply Inc",
      type: "Excipient Supplier",
      location: "Chicago, IL, USA",
      compliance: "warning",
      contact: "sarah.jones@medsupply.com",
      certificate: "GMP Certified",
      lastAudit: "2024-10-20",
      riskLevel: "medium",
    },
    {
      id: "3",
      name: "BioTech Solutions",
      type: "API Manufacturer",
      location: "San Diego, CA, USA",
      compliance: "compliant",
      contact: "mike.chen@biotech.com",
      certificate: "FDA Registered",
      lastAudit: "2024-12-01",
      riskLevel: "low",
    },
    {
      id: "4",
      name: "GlobalMed Corp",
      type: "Packaging Supplier",
      location: "New York, NY, USA",
      compliance: "non-compliant",
      contact: "emily.davis@globalmed.com",
      certificate: "ISO 13485:2016",
      lastAudit: "2024-09-15",
      riskLevel: "high",
    },
    {
      id: "5",
      name: "ChemSource Ltd",
      type: "Raw Material Supplier",
      location: "Houston, TX, USA",
      compliance: "compliant",
      contact: "robert.wilson@chemsource.com",
      certificate: "GMP Certified",
      lastAudit: "2024-11-30",
      riskLevel: "low",
    },
  ];

  get filteredSuppliers(): Supplier[] {
    return this.suppliers.filter((supplier) => {
      const matchesSearch =
        supplier.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        supplier.type.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.filterType === "all" || supplier.type === this.filterType;
      return matchesSearch && matchesType;
    });
  }

  getComplianceBadgeVariant(compliance: Supplier["compliance"]): "default" | "secondary" | "destructive" | "outline" | "primary" | "accent" {
    switch (compliance) {
      case "compliant":
        return "primary";
      case "warning":
        return "accent";
      case "non-compliant":
        return "destructive";
      default:
        return "default";
    }
  }

  getComplianceBadgeText(compliance: Supplier["compliance"]): string {
    switch (compliance) {
      case "compliant":
        return "Compliant";
      case "warning":
        return "Warning";
      case "non-compliant":
        return "Non-Compliant";
      default:
        return "";
    }
  }

  getRiskBadgeVariant(riskLevel: Supplier["riskLevel"]): "default" | "secondary" | "destructive" | "outline" | "primary" | "accent" {
    switch (riskLevel) {
      case "low":
        return "outline";
      case "medium":
        return "outline";
      case "high":
        return "outline";
      default:
        return "outline";
    }
  }

  getRiskBadgeText(riskLevel: Supplier["riskLevel"]): string {
    switch (riskLevel) {
      case "low":
        return "Low Risk";
      case "medium":
        return "Medium Risk";
      case "high":
        return "High Risk";
      default:
        return "";
    }
  }

  getRiskBadgeClass(riskLevel: Supplier["riskLevel"]): string {
    switch (riskLevel) {
      case "low":
        return "risk-badge-low";
      case "medium":
        return "risk-badge-medium";
      case "high":
        return "risk-badge-high";
      default:
        return "";
    }
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
  }

  onFilterChange(filterType: string): void {
    this.filterType = filterType;
  }

  onAddSupplier(): void {
    console.log('Adding new supplier');
    // Handle add supplier logic here
  }

  onViewDetails(supplier: Supplier): void {
    console.log('Viewing details for:', supplier.name);
    // Handle view details logic here
  }

  onContact(supplier: Supplier): void {
    console.log('Contacting:', supplier.name);
    // Handle contact logic here
  }

  onScheduleAudit(supplier: Supplier): void {
    console.log('Scheduling audit for:', supplier.name);
    // Handle schedule audit logic here
  }

  onGenerateReport(supplier: Supplier): void {
    console.log('Generating report for:', supplier.name);
    // Handle generate report logic here
  }

  getFormattedDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }

  trackBySupplierId(index: number, supplier: Supplier): string {
    return supplier.id;
  }
}
