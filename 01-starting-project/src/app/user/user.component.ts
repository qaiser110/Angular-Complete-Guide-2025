import { Component, computed, input, output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selected = input.required<boolean>();
  user = input.required<User>();

  // Output() select = new EventEmitter<string>();
  select = output<string>();

  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
