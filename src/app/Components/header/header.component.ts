import { NgClass } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[NgClass]
})
export class HeaderComponent implements OnChanges{
  @Input() title: string = ''; 
  // @Input() title: string = 'Default Header Title';
  isFilterVisible: boolean = false;

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  clearFilters() {
    // Logic to clear all filters
  }

  applyFilters() {
    // Logic to apply the selected filters
  }
  // ngOnInit(){
  //   console.log("header title",this.title)
  // }
  ngOnChanges() {
    console.log('header title:  ', this.title);  // Log to confirm title update
    
  }
 
}
