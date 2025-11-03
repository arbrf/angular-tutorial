import { Component, ElementRef, ViewChild  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
    import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { UserinfoPipe } from './pipes/userinfo.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,
    ReversePipe,CapitalizePipe,SearchPipe,FormsModule,UserinfoPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: { profile?: { email?: string } } | undefined = undefined;
 @ViewChild('text') text!: ElementRef<HTMLInputElement>;
 @ViewChild('inputtext') inputtext!: ElementRef<HTMLInputElement>;
   current = '';
columnSpan=2;
   read(val: string) {

     this.current = val ?? '';
     console.log(this.current);
   }

  addText() {

     this.text.nativeElement.value="Text from typescro[t]";


   }

ok=true;
items = ['A','B','C'];

alert='';

msg='';

text2='';
count:number=0;
handleEvent(){
this.inputtext.nativeElement.value=this.count.toString();
}
 ratio = 0.756;
users:any;
 toggle() {
   this.users = this.users ? null : { name: 'Ada' }
   };

 // users$ = of([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Carol' }]).pipe(delay(1200));
users$=undefined;


shares: Share[] = [
  {name: "NiftyFifty", expenseratio: 0.5},
  {name: "IndexFund", expenseratio: 0.7},
  {name: "Sensex", expenseratio: 0.65},
];

filter:string='';
test={name:"davoodh",age:26};
btnLabel: string = 'Click me button'; // or any label you want

trackById(_i:number,share:Share){
return share.expenseratio;
}

shuffle() {
    this.shares = [...this.shares].reverse();
  }

}


export interface Share {
  name: string;
  expenseratio: number;
}

