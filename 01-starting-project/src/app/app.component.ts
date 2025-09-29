import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = signal('u1');

  selectedUser = computed(
    () =>
      this.users.find((user) => user.id === this.selectedUserId()) ||
      this.users[0],
  );

  onSelectUser(userId: string) {
    this.selectedUserId.set(userId);
  }
}
