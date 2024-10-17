import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fivew-form',
  standalone: true,
  imports: [CommonModule],
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

}
