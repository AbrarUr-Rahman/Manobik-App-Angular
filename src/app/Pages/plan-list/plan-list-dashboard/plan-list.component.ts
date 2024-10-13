import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-plan-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.scss'
})
export class PlanListComponent {
  users = [
    { name: 'Khalid',phone: '+880 1958674857',submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka',logo: 'assets/images/user-avatar.png' },
    { name: 'Nahid ',phone: '+880 1958674857',submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka',logo: 'assets/images/user-avatar.png' },
    { name: 'Shakib ', phone: '+880 1958674857', submission_date: "May22,2024", location:'Monipur,Mirpur,Dhaka',logo: 'assets/images/user-avatar.png' },
    { name: 'Pranto ',phone: '+880 1958674857', submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka', logo: 'assets/images/user-avatar.png' },
    { name: 'Taimor ',  phone: '+880 1958674857',submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka',logo: 'assets/images/user-avatar.png' },
    { name: 'Kidwa ',phone: '+880 1958674857', submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka', logo: 'assets/images/user-avatar.png' },
    { name: 'Ahmed ',phone: '+880 1958674857', submission_date: "May22,2024", location:'Monipur,Mirpur,Dhaka',logo: 'assets/images/user-avatar.png' },
    { name: 'Esmail ', phone: '+880 1958674857',submission_date: "May22,2024", location:'Monipur,Mirpur,Dhaka', logo: 'assets/images/user-avatar.png' },
    { name: 'Samsad ',phone: '+880 1958674857', submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka', logo: 'assets/images/user-avatar.png' },
    { name: 'Faruque ',phone: '+880 1958674857',submission_date: "May22,2024", location:'Monipur,Mirpur,Dhaka', logo: 'assets/images/user-avatar.png' },
  ];
}
