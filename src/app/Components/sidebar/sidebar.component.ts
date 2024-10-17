import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

{
 
  isSidebarVisible = true;
  @Output() sidebarToggled = new EventEmitter<boolean>();
  

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.sidebarToggled.emit(this.isSidebarVisible); // Emit the new visibility state
  }
}
