import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users = [
    { name: 'Khalid',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Khalid@bracits.com',phone: '+880 1958674857', head: 'Khalid Mursalin', userCount: 7, logo: 'assets/images/khalid.png',org_logo:"assets/images/org-1.png"},
    
    { name: 'Nahid ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Nahid@bracits.com',phone: '+880 1958674857', head: 'Nahid Ahmed', userCount: 10, logo: 'assets/images/nahid.png',org_logo:"assets/images/org-2.png" },

    { name: 'Shakib ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'Shakib@bracits.com', phone: '+880 1958674857', head: 'Shakib Rahman', userCount: 6, logo: 'assets/images/shakib.png' ,org_logo:"assets/images/org-3.png"},
   
    { name: 'Pranto ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Pranto@bracits.com',phone: '+880 1958674857', head: 'Pranto Rahman', userCount: 9, logo: 'assets/images/pranto.png' ,org_logo:"assets/images/org-4.png"},

    { name: 'Taimor ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'Taimor@bracits.com',  phone: '+880 1958674857', head: 'Taimor Khan', userCount: 8, logo: 'assets/images/taimur.png',org_logo:"assets/images/org-5.png"},

    { name: 'Kidwa ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Kidwa@bracits.com',phone: '+880 1958674857', head: 'Kidwa Chowdhury', userCount: 4, logo: 'assets/images/kidwa.png' ,org_logo:"assets/images/org-6.png"},

    { name: 'Ahmed ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Ahmed@bracits.com',phone: '+880 1958674857', head: 'Ahmed Hossain', userCount: 5, logo: 'assets/images/ahmed.png' ,org_logo:"assets/images/org-7.png"},

    { name: 'Esmail ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'Esmail@bracits.com', phone: '+880 1958674857', head: 'Esmail Khan', userCount: 3, logo: 'assets/images/ismail.png' ,org_logo:"assets/images/org-8.png"},
    { name: 'Samsad ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer", email: 'Samsad@bracits.com',phone: '+880 1958674857', head: 'Samsad', userCount: 2, logo: 'assets/images/samsad.png',org_logo:"assets/images/org-9.png" },
    { name: 'Faruque ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",  email: 'Faruque@bracits.com',phone: '+880 1958674857', head: 'Faruque Simanta', userCount: 1, logo: 'assets/images/faruque.png' ,org_logo:"assets/images/org-10.png"},
  ];
  constructor(private router: Router) {}

  navigateToCreateUser() {
    this.router.navigate(['/user-list/create-user']);
  }
}
