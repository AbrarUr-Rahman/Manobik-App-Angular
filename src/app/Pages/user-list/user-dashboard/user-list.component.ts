import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
   // Property to track which action menu is open
   actionMenuIndex: number | null = null;

   // Filter related properties
   searchTerm: string = '';
   orgNameFilter: string = '';
   designationFilter: string = '';
   isFilterVisible: boolean = false;

   users = [
    { name: 'Khalid',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Khalid@bracits.com',phone: '+880 1958674857', head: 'Khalid Mursalin', userCount: 7, logo: 'assets/images/khalid.png',org_logo:"assets/images/org-1.png"},
    
    { name: 'Nahid ',orgname:"GrameenPhone", userRole: 'Business', designation:"Business",email: 'Nahid@bracits.com',phone: '+880 1958674857', head: 'Nahid Ahmed', userCount: 10, logo: 'assets/images/nahid.png',org_logo:"assets/images/org-2.png" },
  
    { name: 'Shakib ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'Shakib@bracits.com', phone: '+880 1958674857', head: 'Shakib Rahman', userCount: 6, logo: 'assets/images/shakib.png' ,org_logo:"assets/images/org-3.png"},
   
    { name: 'Pranto ',orgname:"Nexus", userRole: 'Graphics Designer', designation:"Graphics",email: 'Pranto@bracits.com',phone: '+880 1958674857', head: 'Pranto Rahman', userCount: 9, logo: 'assets/images/pranto.png' ,org_logo:"assets/images/org-4.png"},
  
    { name: 'Taimor ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'Taimor@bracits.com',  phone: '+880 1958674857', head: 'Taimor Khan', userCount: 8, logo: 'assets/images/taimur.png',org_logo:"assets/images/org-5.png"},
  
    { name: 'Kidwa ',orgname:"Airtel", userRole: 'Software Engineer', designation:"Engineer",email: 'Kidwa@bracits.com',phone: '+880 1958674857', head: 'Kidwa Chowdhury', userCount: 4, logo: 'assets/images/kidwa.png' ,org_logo:"assets/images/org-6.png"},
  
    { name: 'Ahmed ',orgname:"Robi", userRole: 'Software Engineer', designation:"Engineer",email: 'Ahmed@bracits.com',phone: '+880 1958674857', head: 'Ahmed Hossain', userCount: 5, logo: 'assets/images/ahmed.png' ,org_logo:"assets/images/org-7.png"},
  
    { name: 'Esmail ',orgname:"Tesla", userRole: 'Software Engineer',designation:"Engineer",email: 'Esmail@bracits.com', phone: '+880 1958674857', head: 'Esmail Khan', userCount: 3, logo: 'assets/images/ismail.png' ,org_logo:"assets/images/org-8.png"},
    { name: 'Samsad ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer", email: 'Samsad@bracits.com',phone: '+880 1958674857', head: 'Samsad', userCount: 2, logo: 'assets/images/samsad.png',org_logo:"assets/images/org-9.png" },
    { name: 'Faruque ',orgname:"Robi", userRole: 'SQA Engineer',designation:"SQA",  email: 'Faruque@bracits.com',phone: '+880 1958674857', head: 'Faruque Simanta', userCount: 1, logo: 'assets/images/faruque.png' ,org_logo:"assets/images/org-10.png"},
  ];

  constructor(private router: Router, private userService: UserService) {}

  // Navigation to create user page
  navigateToCreateUser() {
    this.router.navigate(['/user-list/create-user']);
  }

  // Toggle the action menu for each user
  toggleActionMenu(index: number) {
    if (this.actionMenuIndex === index) {
      this.actionMenuIndex = null; // Close the menu if clicked again
    } else {
      this.actionMenuIndex = index; // Open the menu for this row
    }
  }

  viewDetails(user: any) {
    this.userService.setSelectedUser(user); // Save the selected user in the service
    this.actionMenuIndex = null; // Close the menu after action
    this.router.navigate(['/user-list/details']);
  }

  editOrganization(user: any) {
    console.log('Editing user:', user);
    this.actionMenuIndex = null; // Close the menu after action
    this.router.navigate(['/user-list/create-user']);
  }

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
    this.orgNameFilter = '';
    this.designationFilter = '';
    this.searchTerm = '';
  }

  // Method to filter users based on user input
  filteredUsers() {
    return this.users.filter(user => {
      const searchLower = this.searchTerm.toLowerCase();

      return (
        (!this.searchTerm ||
          user.name.toLowerCase().includes(searchLower) ||
          user.orgname.toLowerCase().includes(searchLower) ||
          user.userRole.toLowerCase().includes(searchLower) ||
          user.designation.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower) ||
          user.phone.includes(searchLower)) && // include phone search
        (!this.orgNameFilter || user.orgname === this.orgNameFilter) &&
        (!this.designationFilter || user.designation === this.designationFilter)
      );
    });
  }

  // Get a list of unique organization names for filtering
  getUniqueOrgNames() {
    const orgNames = this.users.map(user => user.orgname);
    return Array.from(new Set(orgNames)); // Return unique organization names
  }

  // Get a list of unique designations for filtering
  getUniqueDesignations() {
    const designations = this.users.map(user => user.designation);
    return Array.from(new Set(designations)); // Return unique designations
  }
}

  
  
  // Placeholder method for deleting organization
  // deleteOrganization(org: any) {
  //   console.log('Deleting organization', org);
  //   this.actionMenuIndex = null; // Close the menu after action
  // }
// users = [
//   { name: 'Khalid',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Khalid@bracits.com',phone: '+880 1958674857', head: 'Khalid Mursalin', userCount: 7, logo: 'assets/images/khalid.png',org_logo:"assets/images/org-1.png"},
  
//   { name: 'Nahid ',orgname:"GrameenPhone", userRole: 'Software Engineer', designation:"Engineer",email: 'Nahid@bracits.com',phone: '+880 1958674857', head: 'Nahid Ahmed', userCount: 10, logo: 'assets/images/nahid.png',org_logo:"assets/images/org-2.png" },

//   { name: 'Shakib ',orgname:"Banglalink", userRole: 'Software Engineer',designation:"Engineer",email: 'Shakib@bracits.com', phone: '+880 1958674857', head: 'Shakib Rahman', userCount: 6, logo: 'assets/images/shakib.png' ,org_logo:"assets/images/org-3.png"},
 
//   { name: 'Pranto ',orgname:"Nexus", userRole: 'Software Engineer', designation:"Engineer",email: 'Pranto@bracits.com',phone: '+880 1958674857', head: 'Pranto Rahman', userCount: 9, logo: 'assets/images/pranto.png' ,org_logo:"assets/images/org-4.png"},

//   { name: 'Taimor ',orgname:"RabbitHole", userRole: 'Software Engineer',designation:"Engineer",email: 'Taimor@bracits.com',  phone: '+880 1958674857', head: 'Taimor Khan', userCount: 8, logo: 'assets/images/taimur.png',org_logo:"assets/images/org-5.png"},

//   { name: 'Kidwa ',orgname:"Airtel", userRole: 'Software Engineer', designation:"Engineer",email: 'Kidwa@bracits.com',phone: '+880 1958674857', head: 'Kidwa Chowdhury', userCount: 4, logo: 'assets/images/kidwa.png' ,org_logo:"assets/images/org-6.png"},

//   { name: 'Ahmed ',orgname:"Robi", userRole: 'Software Engineer', designation:"Engineer",email: 'Ahmed@bracits.com',phone: '+880 1958674857', head: 'Ahmed Hossain', userCount: 5, logo: 'assets/images/ahmed.png' ,org_logo:"assets/images/org-7.png"},

//   { name: 'Esmail ',orgname:"Tesla", userRole: 'Software Engineer',designation:"Engineer",email: 'Esmail@bracits.com', phone: '+880 1958674857', head: 'Esmail Khan', userCount: 3, logo: 'assets/images/ismail.png' ,org_logo:"assets/images/org-8.png"},
//   { name: 'Samsad ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer", email: 'Samsad@bracits.com',phone: '+880 1958674857', head: 'Samsad', userCount: 2, logo: 'assets/images/samsad.png',org_logo:"assets/images/org-9.png" },
//   { name: 'Faruque ',orgname:"Robi", userRole: 'Software Engineer',designation:"Engineer",  email: 'Faruque@bracits.com',phone: '+880 1958674857', head: 'Faruque Simanta', userCount: 1, logo: 'assets/images/faruque.png' ,org_logo:"assets/images/org-10.png"},
// ];