import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { NgClass } from '@angular/common';
import { TitleService } from '../../services/title.service'; 
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent, SidebarComponent,NgClass],
})
export class LayoutComponent implements OnInit {
  title: string = 'Default Title'; // Title to be displayed

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private titleService: TitleService,
    private titleServiceFromBrowser: Title
  ) {}

  ngOnInit() {
    // Get the title on component initialization (handles page refresh)
    this.setTitleFromRoute();
  
    // Subscribe to router events to update title on navigation
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd), // Listen for NavigationEnd events only
        map(() => this.getDeepestChild(this.route)) // Get the deepest child route
      )
      .subscribe((title: string | undefined) => {
        const newTitle = title || 'Default Title'; // Use a fallback if no title is set
        this.titleService.updateTitle(newTitle); // Update title in the TitleService
        this.titleServiceFromBrowser.setTitle(newTitle); // Update the document title
      });
  }
  
  // Helper function to get title from the deepest child route
  getDeepestChild(route: ActivatedRoute): string | undefined {
    let currentRoute = route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    return currentRoute.snapshot.data['title']; // Retrieve the title from route data
  }
  
  // Set title directly when the component initializes (useful for page refresh)
  setTitleFromRoute() {
    const title = this.getDeepestChild(this.route) || 'Default Title';
    this.titleService.updateTitle(title); // Update title in TitleService
    this.titleServiceFromBrowser.setTitle(title); // Set the document title
  }
  isSidebarVisible = false;

  onSidebarToggled(isVisible: boolean) {
    this.isSidebarVisible = isVisible;
  }
}


//! OLD CODE
// # For dynamic title
  // this.router.events
    // .pipe(
    //   filter((event) => event instanceof NavigationEnd),
    //   map(() => {
    //     let currentRoute = this.route;
    //     while (currentRoute.firstChild) {
    //       currentRoute = currentRoute.firstChild; // Navigate to the deepest child
    //     }
    //     return currentRoute.snapshot.data['title'];
    //   })
    // )
    // .subscribe((title: string | undefined) => {
    //   this.title = title || 'Default Title'; // Set the title property
    //   console.log('Title set in LayoutComponent:', this.title);
    //   this.cd.detectChanges(); // Ensure change detection picks up the title change
    // });