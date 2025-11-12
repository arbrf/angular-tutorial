import { Component } from '@angular/core';
import { CounterService } from '../service/counter-service.service';
import { CounterViewComponent } from '../counter-view/counter-view.component';

@Component({
  selector: 'app-counter-b',
  standalone: true,
  imports: [CounterViewComponent],
  templateUrl: './counter-b.component.html',
  styleUrl: './counter-b.component.css'
})
export class CounterBComponent {
constructor(public counter: CounterService) {}
}
