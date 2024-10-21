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
export class SidebarComponent 

{
 
  isSidebarVisible:boolean = false;
  @Output() sidebarToggled = new EventEmitter<boolean>();
  

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.sidebarToggled.emit(this.isSidebarVisible); // Emit the new visibility state
  }
   // Ensure clicking on icons doesn't toggle the sidebar
   onNavItemClicked(event: MouseEvent) {
    event.stopPropagation(); // Prevent the sidebar from toggling when clicking on icons
  }
}
