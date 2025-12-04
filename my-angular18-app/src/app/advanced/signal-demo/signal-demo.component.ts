import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.css'
})
export class SignalDemoComponent {

  count = signal(0);
  items = signal([{ id: 1, label: 'A' }]);
  inc(){
    this.count.set(this.count()+1);
  }

  add(){
    this.items.update(arr=>[...arr,{id:Date.now(),label:'N'}])
   }
}
