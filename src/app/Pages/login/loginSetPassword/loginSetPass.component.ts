import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../../Components/Login/login-layout/login-layout.component';
import { RouterModule } from '@angular/router';
import { LoginLeftsideComponent } from '../../../Components/Login/login-leftside/login-leftside.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { LeftSideComponent } from "../../../Components/Login/left-side/left-side.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './loginSetPass.component.html',
  styleUrls: ['./loginSetPass.component.scss']
})  
export class LoginSetPassComponent {
  password: string = '';
  confirmPassword: string = '';
  constructor(private router: Router) {}
  ngOnInit() {
    console.log('LoginSetPassComponent initialized'); // This should print
 
  }
  onSubmit(){
    if(this.password===this.confirmPassword  && this.password && this.confirmPassword){
      this.router.navigate(['/login/success']);
      console.log('this worked')
    }
   
    else{
      alert('Password do not match')
    }
  }
}
