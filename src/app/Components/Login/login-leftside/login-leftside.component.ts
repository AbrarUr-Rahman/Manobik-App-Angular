import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-leftside',
  standalone: true,
  imports: [],
  templateUrl: './login-leftside.component.html',
  styleUrl: './login-leftside.component.scss'
})
export class LoginLeftsideComponent {
  //! Faiyaz vai er teaching
   @Input() classes:string = ''
}
