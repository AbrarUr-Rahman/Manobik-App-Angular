import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  selectedUser: any = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Get the selected user from the service
    this.selectedUser = this.userService.getSelectedUser();
  }
}
