import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../../Components/Login/login-layout/login-layout.component';
import { RouterModule } from '@angular/router';
import { LeftSideComponent } from "../../../Components/Login/left-side/left-side.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginLayoutComponent, RouterModule, LeftSideComponent],
  templateUrl: './loginSetPass.component.html',
  styleUrls: ['./loginSetPass.component.scss']
})
export class LoginSetPassComponent {}
