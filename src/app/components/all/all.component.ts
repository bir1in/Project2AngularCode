import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { ClientMessage } from '../../models/client-message.model';
import { UserList } from '../../models/user-list.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
    title = 'All Users';

    ngOnInit() {
      this.findAllUsers();
    }

    public users: UserList = new UserList([]);

    public clientMessage: ClientMessage = new ClientMessage('No users to display.');

    constructor(private userService: UserService) {}

    public findAllUsers(): void {
      this.userService.findAllUsers()
        .subscribe(
          data => this.users = data,
          responseError => this.clientMessage = responseError.error
        );
    }
}
