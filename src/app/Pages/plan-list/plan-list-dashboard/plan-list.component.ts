import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plan-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.scss'
})
export class PlanListComponent {

  private router=inject(Router);
  users = [
    { name: 'Khalid',phone: '+880 1958674857',submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka',logo: 'assets/images/khalid.png' },
    { name: 'Nahid ',phone: '+880 1958674857',submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka',logo: 'assets/images/nahid.png' },
    { name: 'Shakib ', phone: '+880 1958674857', submission_date: "May22,2024", location:'Monipur,Mirpur,Dhaka',logo: 'assets/images/shakib.png' },
    { name: 'Pranto ',phone: '+880 1958674857', submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka', logo: 'assets/images/pranto.png' },
    { name: 'Taimor ',  phone: '+880 1958674857',submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka',logo: 'assets/images/taimur.png' },
    { name: 'Kidwa ',phone: '+880 1958674857', submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka', logo: 'assets/images/kidwa.png' },
    { name: 'Ahmed ',phone: '+880 1958674857', submission_date: "May22,2024", location:'Monipur,Mirpur,Dhaka',logo: 'assets/images/ahmed.png' },
    { name: 'Esmail ', phone: '+880 1958674857',submission_date: "May22,2024", location:'Monipur,Mirpur,Dhaka', logo: 'assets/images/ismail.png' },
    { name: 'Samsad ',phone: '+880 1958674857', submission_date: "May22,2024",location:'Monipur,Mirpur,Dhaka', logo: 'assets/images/samsad.png' },
    { name: 'Faruque ',phone: '+880 1958674857',submission_date: "May22,2024", location:'Monipur,Mirpur,Dhaka', logo: 'assets/images/faruque.png' },
  ];

  goDetails(){
      this.router.navigate(['/plan-list/details'])
  }
}
