import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
model = { name: '', email: '' };
  submitted = false;

  onSubmit() {
    console.log('Form submitted:', this.model);
    this.submitted = true;
  }
}
