import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  customInterval$ = new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next({ message: 'Hello Observable!' });
    }, 2000);
  });

  ngOnInit() {
    const subscription = this.customInterval$.subscribe({
      next: (val) => console.log(val),
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
