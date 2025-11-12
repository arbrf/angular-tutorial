import { Component } from '@angular/core';
import { LocalCounterService } from '../service/local-counter-service.service';

@Component({
  selector: 'app-counter-view',
  standalone: true,
  imports: [],
  providers: [LocalCounterService],
  templateUrl: './counter-view.component.html',
  styleUrl: './counter-view.component.css'
})
export class CounterViewComponent {
constructor(public svc:LocalCounterService) {}
}
