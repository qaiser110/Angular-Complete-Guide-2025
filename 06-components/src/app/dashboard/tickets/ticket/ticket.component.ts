import { Component, input, output } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = false;
  markComplete = output();

  toggleDetails() {
    this.detailsVisible = !this.detailsVisible;
  }

  onMarkAsCompleted() {
    this.markComplete.emit();
  }
}
