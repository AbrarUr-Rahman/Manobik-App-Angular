import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

import { FooterComponent } from '../footer/footer.component';
import { LeftSideComponent } from '../left-side/left-side.component';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [LogoComponent, FooterComponent,LeftSideComponent],
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {}
