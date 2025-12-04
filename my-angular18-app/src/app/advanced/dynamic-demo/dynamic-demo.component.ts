import { Component, ComponentRef, createComponent, ElementRef, EnvironmentInjector, inject, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { create } from 'domain';

@Component({
  selector: 'app-dynamic-demo',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-demo.component.html',
  styleUrl: './dynamic-demo.component.css'
})
export class DynamicDemoComponent {
@ViewChild('host', { read: ElementRef }) host!: ElementRef;
 env = inject(EnvironmentInjector);
 ref: ComponentRef<CardComponent> | null = null;


  mount() {
    if(this.ref) { return; }
    this.ref =createComponent(CardComponent, {
      environmentInjector: this.env,
      hostElement: this.host.nativeElement
    });

    this.ref.instance.title = 'Mounted Card'; 
    this.ref.instance.clicked.subscribe(()=>{
      alert('Card Clicked!'+this.ref?.instance.title);
    });
  }

  update() {

    this.ref?.setInput('title', 'Updated Card '+ new Date().toLocaleTimeString());
  }
unmount() {
  this.ref?.destroy();
  this.ref = null;
  this.host.nativeElement.innerHTML = '';
}
  
}
 
