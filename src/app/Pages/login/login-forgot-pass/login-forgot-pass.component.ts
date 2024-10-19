import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-forgot-pass',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-forgot-pass.component.html',
  styleUrl: './login-forgot-pass.component.scss',
})
export class LoginForgotPassComponent {
  email: string = '';
  constructor(private router: Router) {}
  goSuccess() {
    this.router.navigate(['/login/success']);
    //! email validation
    // const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

    // if (this.email && emailPattern.test(this.email)) {
    //   this.router.navigate(['/login/success']);
    // } else {
    //   alert('Please enter a valid email address');
    // }
  }
}
