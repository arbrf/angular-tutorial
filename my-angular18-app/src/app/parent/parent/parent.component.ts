import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildComponent } from "../../child/child/child.component";



@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

itemsInput: string[]= ['Apple', 'Banana'];;

   
toggleInputItems() {
    console.log('Before:', this.itemsInput);
    this.itemsInput=this.itemsInput?.push('New Item') ? this.itemsInput : ['Item 1', 'Item 2', 'Item 3']; 
    console.log('After:', this.itemsInput);
}
onSaved(count: number) {
console.log("Count increased "+count);
}
  
@Input() name:string="Send string to child;"
showContent=false;

 ngOnDestroy() {
    console.log("Cleanging up resources");
  }
}
