import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-fivew-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './fivew-form.component.html',
  styleUrl: './fivew-form.component.scss'
})
export class FivewFormComponent {
  constructor (private router:Router){};
  submitForm(){
    this.router.navigate(['/fivew-form/create-form'])
}
  users = [
    { name: 'Khalid',email: 'Khalid@bracits.com',phone: '+880 1958674857', head: 'Khalid Mursalin', userCount: 7, logo: 'assets/images/khalid.png',location:"Gulshan-1",status:"Pending" },
    { name: 'Nahid ',email: 'Nahid@bracits.com',phone: '+880 1958674857', head: 'Nahid Ahmed', userCount: 10, logo: 'assets/images/nahid.png' ,location:"Gulshan-1",status:"Verified" },
    { name: 'Shakib ',email: 'Shakib@bracits.com', phone: '+880 1958674857', head: 'Shakib Rahman', userCount: 6, logo: 'assets/images/shakib.png' ,location:"Gulshan-1",status:"Verified" },
    { name: 'Pranto ',email: 'Pranto@bracits.com',phone: '+880 1958674857', head: 'Pranto Rahman', userCount: 9, logo:'assets/images/pranto.png' ,location:"Gulshan-1",status:"Verified" },
    { name: 'Taimor ',email: 'Taimor@bracits.com',  phone: '+880 1958674857', head: 'Taimor Khan', userCount: 8, logo: 'assets/images/taimur.png' ,location:"Gulshan-1",status:"Verified" },
    { name: 'Kidwa ',email: 'Kidwa@bracits.com',phone: '+880 1958674857', head: 'Kidwa Chowdhury', userCount: 4, logo: 'assets/images/kidwa.png' ,location:"Gulshan-1",status:"Verified" },
    { name: 'Ahmed ',email: 'Ahmed@bracits.com',phone: '+880 1958674857', head: 'Ahmed Hossain', userCount: 5, logo: 'assets/images/ahmed.png' ,location:"Gulshan-1",status:"Verified" },
    { name: 'Esmail ',email: 'Esmail@bracits.com', phone: '+880 1958674857', head: 'Esmail Khan', userCount: 3, logo: 'assets/images/ismail.png',location:"Gulshan-1",status:"Verified"  },
    { name: 'Samsad ', email: 'Samsad@bracits.com',phone: '+880 1958674857', head: 'Samsad', userCount: 2, logo: 'assets/images/samsad.png', location:"Gulshan-1",status:"Verified" },
    { name: 'Faruque ',  email: 'Faruque@bracits.com',phone: '+880 1958674857', head: 'Faruque Simanta', userCount: 1, logo:'assets/images/faruque.png' ,location:"Gulshan-1",status:"Verified" },
  ];
  // Filter related properties
  searchTerm: string = '';
  orgNameFilter: string = '';
  designationFilter: string = '';
  isFilterVisible: boolean = false;
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
            user.status.toLowerCase().includes(searchLower) ||
            user.head.toLowerCase().includes(searchLower) ||
            user.location.toLowerCase().includes(searchLower) ||
            user.email.toLowerCase().includes(searchLower) ||
            user.phone.includes(searchLower)) && // include phone search
          (!this.orgNameFilter || user.head === this.orgNameFilter) &&
          (!this.designationFilter || user.location === this.designationFilter)
        );
      });
    }
  
    // Get a list of unique organization names for filtering
    getUniqueLocation() {
      const orgNames = this.users.map(user => user.location);
      return Array.from(new Set(orgNames)); // Return unique organization names
    }
  
    // Get a list of unique designations for filtering
    getStatus() {
      const designations = this.users.map(user => user.status);
      return Array.from(new Set(designations)); // Return unique designations
    }
  }
  

