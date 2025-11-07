import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { of, delay } from 'rxjs';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { ReversePipe } from '../pipes/reverse.pipe';
import { SearchPipe } from '../pipes/search.pipe';
import { UserinfoPipe } from '../pipes/userinfo.pipe';

@Component({
  selector: 'app-angularcore',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReversePipe, CapitalizePipe, SearchPipe, UserinfoPipe],
  templateUrl: './angularcore.component.html',
  styleUrl: './angularcore.component.css'
})
export class AngularcoreComponent {
 // 🔹 Basic Data Binding
  name = 'Angular';
  favorite = '';
  isDisabled = true;
  count = 0;
  title = '';
  span = 1;

  constructor(private router:Router) {}
 
  // 🔹 Template Reference & ViewChild
  @ViewChild('text') text!: ElementRef<HTMLInputElement>;
  @ViewChild('inputtext') inputtext!: ElementRef<HTMLInputElement>;
  current = '';
  text2 = '';

  // 🔹 Arrays and Toggle Example
  show = true;
 

  // 🔹 Object and State
  user: { profile?: { email?: string } } | undefined = undefined;
  ok = true;
  loggedIn = false;
  hasAccess = false;

  // 🔹 Pipes & Async Data
  ratio = 0.756;
  users$ = of([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Carol' }]).pipe(delay(1200));
  users: any;
  test = { name: 'davoodh', age: 26 };

  // 🔹 Select Box Example
  alert = '';
  msg = '';

  // 🔹 Event & Keyboard Input
  value = '';
  lastKey = '';
  onInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
  }

  // 🔹 Functions
  read(val: string) {
    this.current = val ?? '';
    console.log('Read value:', this.current);
  }

  addText() {
    this.text.nativeElement.value = 'Text set from TypeScript using ViewChild';
  }

  handleEvent() {
    this.inputtext.nativeElement.value = this.count.toString();
  }

  toggle() {
    this.users = this.users ? null : { name: 'Ada' };
    this.show = !this.show;
  }



  // 🔹 trackBy Example
  shares: Share[] = [
    { name: 'NiftyFifty', expenseratio: 0.5 },
    { name: 'IndexFund', expenseratio: 0.7 },
    { name: 'Sensex', expenseratio: 0.65 },
  ];
  filter: string = '';
  btnLabel: string = 'Click me button';

  trackById(_i: number, share: Share) {
    return share.expenseratio;
  }
button='Click me';
  shuffle() {
    console.log(this.shows());
    this.shares = [...this.shares].reverse();
    if(!this.shows()){
       this.button='Click me to Hide';
        
    }
    else{
       this.button='Click me to Show';
      
    }
   
    if(this.shows()){
      this.shows.set(false);
    }
    else{
      this.shows.set(true);
    }
  }

   shows = signal(true);
   status = signal<'loading' | 'success' | 'error' | string>('loading');
    loadings = signal(true);
  error = signal(false);
  private _timer: any;
  startLoading() {
    this.loadings.set(true);
    this.error.set(false);
     clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this.loadings.set(false);
    }, 800);
    
  }
  showError() {
    this.error.set(true);
    this.loadings.set(false);
  }
  reset() {
    this.loadings.set(false);
    this.error.set(false);
    this.items.set([ { id: 1, name: 'Angular' ,price:100 },
    { id: 2, name: 'React',price:200 },
    { id: 3, name: 'Vue',price:150 }]);
   
  }

  clear() { this.items.set([]); }
nextId=4;
    add() {
     this.items.update(arr => [...arr, { id: this.nextId++, name: 'New ' + Date.now(),price:Math.floor(Math.random()*300) }]);
    console.log('Add() function called on keyup.enter');
  }

  renameFirst() {
    this.items.update(arr => arr.map((it, i) => i === 0 ? { ...it, name: it.name + ' *' } : it));
  }

  shuffle2() {
    this.items.update(arr => {
      const copy = [...arr];

      for (let i = copy.length - 1; i > 0; i--) {
        console.log(i);
        let t=Math.random();
        console.log("Math.random = "+t);
        let r=Math.floor(t * (i + 1));
        console.log("after multiple math.random with i+1== "+r);
       
        const j = r;
        console.log("copy [i]= "+copy[i].name+" copy[j]= "+copy[j].name+" -------  "+copy[j].name, copy[i].name);
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });
  }
  
items = signal([
    { id: 1, name: 'Angular',price:100 },
    { id: 2, name: 'React',price:200 },
    { id: 3, name: 'Vue',price:150 }
  ]);  
  query = signal('');
  sortKey = signal<'name' | 'price'>('name');
  sortDir = signal<1 | -1>(1); // 1 asc, -1 desc

  view = computed(() => {
    const q = this.query().toLowerCase();
    console.log('Computed view called with query:', q);
    const dir = this.sortDir();
    const key = this.sortKey();
    return this.items()
      .filter(it => it.name.toLowerCase().includes(q))
      .sort((a, b) => {
        const av: any = (a as any)[key];
        const bv: any = (b as any)[key];
        return av < bv ? -1 * dir : av > bv ? 1 * dir : 0;
      });
  });

  setSort(key: 'name' | 'price') {
    console.log('setSort', key);
    console.log('Current sortKey:', this.sortKey());
    if (this.sortKey() === key) {
      this.toggleDir();
    } else {
      this.sortKey.set(key);
    }
  }

  toggleDir() {
    this.sortDir.set(this.sortDir() === 1 ? -1 : 1);
  }

}

// 🔹 Interface for Type Safety
export interface Share {
  name: string;
  expenseratio: number;
}
