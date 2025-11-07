import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { UserinfoPipe } from './pipes/userinfo.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet, CommonModule, FormsModule, ReversePipe, CapitalizePipe, SearchPipe, UserinfoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  // 🧭 Define your navigation links
  navLinks = [
    { path: '/parent', label: 'Parent' },
    { path: '/child', label: 'Child' },
    { path: '/form', label: 'Forms' },
    { path: '/core', label: 'Angular Core' }
  ];

 }


