import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

import { FooterComponent } from '../footer/footer.component';
import { LoginLeftsideComponent } from '../login-leftside/login-leftside.component';
import { RouterModule } from '@angular/router';

// import { LoginLeftsideComponent } from '../login-leftside/login-leftside.component';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [LogoComponent, FooterComponent,LoginLeftsideComponent,RouterModule],
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {}
