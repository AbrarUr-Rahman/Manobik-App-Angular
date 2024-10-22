import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class validation {
  private users = [
    {
      email: 'abrar@gmail.com',
      password: 'password123',
      name: 'User One',
    },
    {
      email: 'sakib@gmail.com',
      password: 'password456',
      name: 'User Two',
    },
  ];

  constructor() {}

  // Method to validate the user credentials
  validateUser(email: string, password: string) {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );
    return user ? user : null;
  }
}
