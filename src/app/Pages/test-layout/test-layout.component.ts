import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { SidebarComponent } from '../../Components/sidebar/sidebar.component';

@Component({
  selector: 'app-test-layout',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent],
  templateUrl: './test-layout.component.html',
  styleUrl: './test-layout.component.scss'
})
export class TestLayoutComponent {

}
