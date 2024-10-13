import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users = [
    { name: 'Khalid',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Khalid@bracits.com',phone: '+880 1958674857', head: 'Khalid Mursalin', userCount: 7, logo: 'assets/images/user-avatar.png' },
    { name: 'Nahid ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Nahid@bracits.com',phone: '+880 1958674857', head: 'Nahid Ahmed', userCount: 10, logo: 'assets/images/user-avatar.png' },
    { name: 'Shakib ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'Shakib@bracits.com', phone: '+880 1958674857', head: 'Shakib Rahman', userCount: 6, logo: 'assets/images/user-avatar.png' },
    { name: 'Pranto ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Pranto@bracits.com',phone: '+880 1958674857', head: 'Pranto Rahman', userCount: 9, logo: 'assets/images/user-avatar.png' },
    { name: 'Taimor ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'Taimor@bracits.com',  phone: '+880 1958674857', head: 'Taimor Khan', userCount: 8, logo: 'assets/images/user-avatar.png'},
    { name: 'Kidwa ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Kidwa@bracits.com',phone: '+880 1958674857', head: 'Kidwa Chowdhury', userCount: 4, logo: 'assets/images/user-avatar.png' },
    { name: 'Ahmed ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'Ahmed@bracits.com',phone: '+880 1958674857', head: 'Ahmed Hossain', userCount: 5, logo: 'assets/images/user-avatar.png' },
    { name: 'Esmail ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'Esmail@bracits.com', phone: '+880 1958674857', head: 'Esmail Khan', userCount: 3, logo: 'assets/images/user-avatar.png' },
    { name: 'Samsad ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer", email: 'Samsad@bracits.com',phone: '+880 1958674857', head: 'Samsad', userCount: 2, logo: 'assets/images/user-avatar.png' },
    { name: 'Faruque ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",  email: 'Faruque@bracits.com',phone: '+880 1958674857', head: 'Faruque Simanta', userCount: 1, logo: 'assets/images/user-avatar.png' },
  ];
}
// }
// organizations = [
//   { name: 'Organization 1', email: 'Khalid@bracits.com', phone: '+880 1958674857', head: 'Khalid Mursalin', userCount: 7, logo: 'assets/logo1.png' },
//   { name: 'Organization 2', email: 'Nahid@bracits.com', phone: '+880 1958674857', head: 'Nahid Ahmed', userCount: 10, logo: 'assets/logo2.png' },
//   { name: 'Organization 3', email: 'Shakib@bracits.com', phone: '+880 1958674857', head: 'Shakib Rahman', userCount: 6, logo: 'assets/logo3.png' },
//   { name: 'Organization 4', email: 'Pranto@bracits.com', phone: '+880 1958674857', head: 'Pranto Rahman', userCount: 9, logo: 'assets/logo4.png' },
//   { name: 'Organization 5', email: 'Taimor@bracits.com', phone: '+880 1958674857', head: 'Taimor Khan', userCount: 8, logo: 'assets/logo5.png' },
//   { name: 'Organization 6', email: 'Kidwa@bracits.com', phone: '+880 1958674857', head: 'Kidwa Chowdhury', userCount: 4, logo: 'assets/logo6.png' },
//   { name: 'Organization 7', email: 'Ahmed@bracits.com', phone: '+880 1958674857', head: 'Ahmed Hossain', userCount: 5, logo: 'assets/logo7.png' },
//   { name: 'Organization 8', email: 'Esmail@bracits.com', phone: '+880 1958674857', head: 'Esmail Khan', userCount: 3, logo: 'assets/logo8.png' },
//   { name: 'Organization 9', email: 'Samsad@bracits.com', phone: '+880 1958674857', head: 'Samsad', userCount: 2, logo: 'assets/logo9.png' },
//   { name: 'Organization 10', email: 'Faruque@bracits.com', phone: '+880 1958674857', head: 'Faruque Simanta', userCount: 1, logo: 'assets/logo10.png' },
