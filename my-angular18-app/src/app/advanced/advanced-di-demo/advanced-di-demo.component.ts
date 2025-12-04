import { Component, inject } from '@angular/core';
import { API_URL, USER_NAME, FEATURES } from '../../app.tokens';


@Component({
  selector: 'app-advanced-di-demo',
  standalone: true,
  imports: [],
  templateUrl: './advanced-di-demo.component.html',
  styleUrl: './advanced-di-demo.component.css'
})
export class AdvancedDiDemoComponent {
  api = inject(API_URL);
  user = inject(USER_NAME, { optional: true });
  features = inject(FEATURES, { optional: true });
}
