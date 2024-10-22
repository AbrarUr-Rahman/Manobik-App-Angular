import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';

import { CommonModule, NgClass } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,NgClass,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit

{
  isSidebarVisible:boolean = true;
  @Output() sidebarToggled = new EventEmitter<boolean>();

 
  constructor(private router: Router) {}

  ngOnInit() {
    // Load the sidebar state from localStorage on component load
    const savedSidebarState = localStorage.getItem('isSidebarVisible');
    this.isSidebarVisible = savedSidebarState === 'true';
    this.sidebarToggled.emit(this.isSidebarVisible);
    // Listen to route changes and maintain sidebar state
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const savedState = localStorage.getItem('isSidebarVisible');
      this.isSidebarVisible = savedState === 'true';
    });
  }
  

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    localStorage.setItem('isSidebarVisible', String(this.isSidebarVisible)); // Save state to localStorage

    this.sidebarToggled.emit(this.isSidebarVisible); // Emit the new visibility state
  }
  //  // Ensure clicking on icons doesn't toggle the sidebar
  //  onNavItemClicked(event: MouseEvent) {
    
     
  //   // event.preventDefault();
  //   // event.stopPropagation(); // Prevent the sidebar from toggling when clicking on icons
  // }

}
