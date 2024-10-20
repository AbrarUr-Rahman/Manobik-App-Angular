import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-login-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-signin.component.html',
  styleUrl: './login-signin.component.scss'
})
export class LoginSigninComponent {
  email: string = '';
  password: string = '';
  //  user = {
  //   email: 'user@example.com',
  //   password: 'password123'
  // };
  constructor(private router: Router) {}

  onSignIn() {
    // Validate credentials or perform any action here
    // For now, just navigate to the dashboard
    if (this.email && this.password) {
      this.router.navigate(['/profile']); // Navigate to the dashboard route
    } else {
      // Handle error case (e.g., display a message if needed)
      alert('Please enter valid credentials');
    }
  }
}
