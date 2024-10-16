import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';

import { NgClass } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent 
// implements OnInit
{
  // title:string="Default List"
  // constructor(private router: Router, private route: ActivatedRoute) {} 
  // ngOnInit() {
  //   console.log('SidebarComponent initialized'); // This works
  
  //   this.router.events
  //     .pipe(
  //       filter(event => event instanceof NavigationEnd),  // Filter for NavigationEnd events
  //       map(() => {
  //         let currentRoute = this.router.routerState.root;
  //         while (currentRoute.firstChild) {
  //           currentRoute = currentRoute.firstChild; // Navigate to the deepest child
  //         }
  //         return currentRoute.snapshot.data['title']; // Get title from the deepest activated route
  //       })
  //     )
  //     .subscribe((title: string | undefined) => {
  //       console.log('Title emitted:', title);  // Log emitted title
  //       console.log('Current Title:', title); // Log the current title
  //       this.title = title || 'Default Title'; // Set title or fallback
  //     });
  // }
  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
