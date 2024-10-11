// organization-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organization-list',
  standalone: true,
  imports: [CommonModule], // Import CommonModule to enable *ngFor
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
}
