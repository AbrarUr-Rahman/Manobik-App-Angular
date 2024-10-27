import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowServiceService {
  showContent:boolean=true;

  @HostListener('window:resize',['$event'])
  onResize(event:Event){
    this.checkWindowSize();
  }
    checkWindowSize() {
      const windowWidth=window.innerWidth;

      if(windowWidth<640){
        this.showContent=false; //Hide Content if the screen is small
      }
      else{
        this.showContent=true; //show content if the screen is large enough
      }
    }



  constructor() { }
}
