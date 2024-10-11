import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../../Components/Login/login-layout/login-layout.component';
import { RouterModule } from '@angular/router';
import { LoginLeftsideComponent } from '../../../Components/Login/login-leftside/login-leftside.component';
import { CommonModule } from '@angular/common';
// import { LeftSideComponent } from "../../../Components/Login/left-side/left-side.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loginSetPass.component.html',
  styleUrls: ['./loginSetPass.component.scss']
})  
export class LoginSetPassComponent {
  ngOnInit() {
    console.log('LoginSetPassComponent initialized'); // This should print
  }
}
