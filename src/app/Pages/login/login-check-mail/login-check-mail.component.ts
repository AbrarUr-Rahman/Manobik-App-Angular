import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-check-mail',
  standalone: true,
  imports: [],
  templateUrl: './login-check-mail.component.html',
  styleUrl: './login-check-mail.component.scss'
})
export class LoginCheckMailComponent {
    constructor(private router:Router){}

  goToSetPass(){
    this.router.navigate(['/login/set-pass'])
  }
}
