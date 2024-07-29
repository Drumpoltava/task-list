import {Component} from '@angular/core';

import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {TasksComponent} from "./tasks/tasks.component";

import {DUMMY_USERS} from "./dummy-users";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';

  users = DUMMY_USERS;

  selectedUserId = 'u1';

  get selectedUsers() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
