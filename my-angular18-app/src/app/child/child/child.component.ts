import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
showContent: boolean=false;
inc() {
  this.count++;
this.saved.emit(this.count);
}
@Input() child='';
@Output() saved = new EventEmitter<number>();
count: number=0;
}
