import { Component, ElementRef, output, ViewChild } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  // @Output() onAdd = new EventEmitter<{ title: string; text: string }>();
  onAdd = output<{ title: string; text: string }>();

  onSubmit(title: string, requestText: string) {
    this.onAdd.emit({ title, text: requestText });
    this.form?.nativeElement.reset();
  }
}
