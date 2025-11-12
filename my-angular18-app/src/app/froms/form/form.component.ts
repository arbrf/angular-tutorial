import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormsModule, NgModel, Validators, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
onSubmit() {
  this.submitted = true;
console.log('Template-driven Form submitted:', this.model);
}
  // Declare form as a property first
  form: FormGroup;
  submitted=false;
  model = { name: '', email: '' };

  constructor(private fb: FormBuilder) {
    // Initialize form in constructor
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    });
  }

  onSubmitReactive() {
    console.log('Reactive Form submitted:', this.form.value);
  }

  get name() {
  return this.form.get('name');
}

get email() {
  return this.form.get('email');
}

}
