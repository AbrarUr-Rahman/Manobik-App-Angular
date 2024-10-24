import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-login-leftside',
  standalone: true,
  imports: [],
  templateUrl: './login-leftside.component.html',
  styleUrl: './login-leftside.component.scss'
})
export class LoginLeftsideComponent {
  //! Faiyaz vai er teaching
  //  @Input() classes:string = ''

  showContent = true; // Default is to show the content

  ngOnInit() {
    this.checkWindowSize(); // Check window size when the component is initialized
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 640) {
      this.showContent = false; // Hide content if the screen is small
    } else {
      this.showContent = true; // Show content if the screen is large enough
    }
  }
}
