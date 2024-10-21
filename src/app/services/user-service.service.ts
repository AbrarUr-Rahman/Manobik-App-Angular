import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private selectedUser: any = null;

  setSelectedUser(user: any) {
    this.selectedUser = user;
  }

  getSelectedUser() {
    return this.selectedUser;
  }
}
