import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent, SidebarComponent]
})
export class LayoutComponent implements OnInit {
  title: string = 'User List'; // Title to be displayed

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
   
    console.log('LayoutComponent initialized'); // This works

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),  // Filter for NavigationEnd events
        map(() => {
          let child = this.route.firstChild;
          console.log('Checking child routes...'); // Log for debugging
          while (child?.firstChild) {
            console.log('Current child:', child); // Log the current child
            child = child.firstChild; // Traverse to the deepest child
          }
          return child?.snapshot.data['title']; // Get title from route data
        })
      )
      .subscribe((title: string | undefined) => {
        console.log('Current Title:', title); // Log the current title
        this.title = title || 'Default Title'; // Set title or fallback
      });
  }
}
