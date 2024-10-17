import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[NgClass]
})
export class HeaderComponent implements OnInit{
  // @Input() title: string = ''; 
  // @Input() title: string = 'Default Header Title';
title:string='Default Title';  
  isFilterVisible: boolean = false;
  constructor (private router:Router,
    private titleService:TitleService
  ){}

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
  // ngOnChanges() {
  //   console.log('header title:  ', this.title);  // Log to confirm title update
    
  // }
  goToDashboard(){
    this.router.navigate(['/profile']);
  }

  ngOnInit() {
      this.titleService.currentTitle.subscribe((newTitle)=>{
        this.title=newTitle;
      })
  }
 
}
