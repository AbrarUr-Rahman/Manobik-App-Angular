import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  imports: [RouterModule, HeaderComponent, SidebarComponent],
})
export class LayoutComponent implements OnInit {
  title: string = 'Default Title'; // Title to be displayed

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('LayoutComponent initialized');

    // Subscribe to router events and update the title based on the route
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd), // Filter for NavigationEnd events
        map(() => {
          let currentRoute = this.router.routerState.root;
          while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild; // Navigate to the deepest child
          }
          return currentRoute.snapshot.data['title']; // Get title from the deepest activated route
        })
      )
      .subscribe((title: string | undefined) => {
        console.log('Current Title:', title);

        this.title = title || 'Default Title'; // Set the title or a fallback value
        console.log('Title set in LayoutComponent:', this.title);
      
        // this.cd.detectChanges();
      });
  }
}
