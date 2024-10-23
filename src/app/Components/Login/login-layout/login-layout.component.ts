import { Component, HostListener, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

import { FooterComponent } from '../footer/footer.component';
import { LoginLeftsideComponent } from '../login-leftside/login-leftside.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginSigninComponent } from '../../../Pages/login/login-signin/login-signin.component';
import { FormsModule, NgForm } from '@angular/forms';

// import { LoginLeftsideComponent } from '../login-leftside/login-leftside.component';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [LogoComponent, FooterComponent,LoginLeftsideComponent,RouterModule,CommonModule,LoginSigninComponent,FormsModule],
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent  {
  // showContent = true; // Default is to show the content

  // ngOnInit() {
  //   this.checkWindowSize(); // Check window size when the component is initialized
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.checkWindowSize();
  // }

  // checkWindowSize() {
  //   const windowWidth = window.innerWidth;

  //   if (windowWidth < 640) {
  //     this.showContent = false; // Hide content if the screen is small
  //   } else {
  //     this.showContent = true; // Show content if the screen is large enough
  //   }
  // }
  
}

