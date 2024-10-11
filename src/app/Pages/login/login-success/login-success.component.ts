import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../../Components/Login/login-layout/login-layout.component';


@Component({
  selector: 'app-login-success',
  standalone: true,
  imports: [LoginLayoutComponent],
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss']
})
export class LoginSuccessComponent {}
