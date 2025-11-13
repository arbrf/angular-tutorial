import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgIf,HttpClientModule,NgFor],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']

})
export class ChildComponent implements  OnChanges{
  showContent: boolean=false;
@Input() itemsInput: string[] = [];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['itemsInput']) {
      console.log('Previous:', changes['itemsInput'].previousValue);
      console.log('Current:', changes['itemsInput'].currentValue);
    }
  }
  inc() {
    this.count++;
  this.saved.emit(this.count);
  }
  @Input() child='';
  @Output() saved = new EventEmitter<number>();
  count: number=0;
  constructor(private router: Router,private route: ActivatedRoute, ) {}
  id: string | null = null;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
  }

  http = inject(HttpClient);
  users: any[] = [];
  loading = false;
  error = '';

  load() {
    this.loading = true;
    this.error = '';
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => { this.users = data; this.loading = false; },
        error: () => { this.error = 'Failed to load users'; this.loading = false; }
      });
  }
}
