import { Component } from '@angular/core';
import { CounterService } from '../service/counter-service.service';
import { CounterViewComponent } from '../counter-view/counter-view.component';

@Component({
  selector: 'app-counter-a',
  standalone: true,
  imports: [CounterViewComponent],
  templateUrl: './counter-a.component.html',
  styleUrl: './counter-a.component.css'
})
export class CounterAComponent {
constructor(public counter: CounterService) {}
}
