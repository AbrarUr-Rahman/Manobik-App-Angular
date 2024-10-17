import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})
export class TitleService {
  // Initialize a BehaviorSubject with a default title
  private titleSource = new BehaviorSubject<string>('Default Title');
  
  // Observable to allow components to subscribe to title changes
  currentTitle = this.titleSource.asObservable();

  // Method to update the title
  updateTitle(newTitle: string) {
    this.titleSource.next(newTitle);
  }
}
