import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-organization-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import CommonModule to enable *ngFor
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent {
  organizations = [
    { name: 'Organization 1', email: 'Khalid@bracits.com', phone: '+880 1958674857', head: 'Khalid Mursalin', userCount: 7, logo: 'assets/images/org-logo.png' },
    { name: 'Organization 2', email: 'Nahid@bracits.com', phone: '+880 1958674857', head: 'Nahid Ahmed', userCount: 10, logo: 'assets/images/org-logo.png' },
    { name: 'Organization 3', email: 'Shakib@bracits.com', phone: '+880 1958674857', head: 'Shakib Rahman', userCount: 6, logo: 'assets/images/org-logo.png'},
    { name: 'Organization 4', email: 'Pranto@bracits.com', phone: '+880 1958674857', head: 'Pranto Rahman', userCount: 9, logo: 'assets/images/org-logo.png'},
    { name: 'Organization 5', email: 'Taimor@bracits.com', phone: '+880 1958674857', head: 'Taimor Khan', userCount: 8, logo: 'assets/images/org-logo.png' },
    { name: 'Organization 6', email: 'Kidwa@bracits.com', phone: '+880 1958674857', head: 'Kidwa Chowdhury', userCount: 4, logo: 'assets/images/org-logo.png' },
    { name: 'Organization 7', email: 'Ahmed@bracits.com', phone: '+880 1958674857', head: 'Ahmed Hossain', userCount: 5, logo: 'assets/images/org-logo.png'},
    { name: 'Organization 8', email: 'Esmail@bracits.com', phone: '+880 1958674857', head: 'Esmail Khan', userCount: 3, logo: 'assets/images/org-logo.png' },
    { name: 'Organization 9', email: 'Samsad@bracits.com', phone: '+880 1958674857', head: 'Samsad', userCount: 2, logo: 'assets/images/org-logo.png' },
    { name: 'Organization 10', email: 'Faruque@bracits.com', phone: '+880 1958674857', head: 'Faruque Simanta', userCount: 1, logo: 'assets/images/org-logo.png' },
  ];

  // Filter-related properties
  searchTerm: string = '';
  headFilter: string = '';
  emailFilter: string = '';
  isFilterVisible: boolean = false;

  // Property to track which action menu is open
  actionMenuIndex: number | null = null;

  // Method to toggle filter visibility
  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  // Method to apply filters
  applyFilters() {
    this.isFilterVisible = false;
  }

  // Method to clear filters
  clearFilters() {
    this.headFilter = '';
    this.emailFilter = '';
    this.searchTerm = '';
  }

  // Method to filter organizations based on user input
  filteredOrganizations() {
    return this.organizations.filter(org => {
      return (
        (!this.searchTerm || org.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (!this.headFilter || org.head === this.headFilter) &&
        (!this.emailFilter || org.email === this.emailFilter)
      );
    });
  }

  // Method to toggle the action menu
  toggleActionMenu(index: number) {
    if (this.actionMenuIndex === index) {
      this.actionMenuIndex = null; // Close the menu if clicked again
    } else {
      this.actionMenuIndex = index; // Open the menu for this row
    }
  }

  // Placeholder method for viewing details
  viewDetails(org: any) {
    console.log('Viewing details for', org);
    this.actionMenuIndex = null; // Close the menu after action
  }

  // Placeholder method for editing organization
  editOrganization(org: any) {
    console.log('Editing organization', org);
    this.actionMenuIndex = null; // Close the menu after action
  }

  // Placeholder method for deleting organization
  // deleteOrganization(org: any) {
  //   console.log('Deleting organization', org);
  //   this.actionMenuIndex = null; // Close the menu after action
  // }
}
