// app.routes.ts
import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent/parent.component';
import { ChildComponent } from './child/child/child.component';
import { FormComponent } from './froms/form/form.component';
import { AngularcoreComponent } from './angularcore/angularcore.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'child/:id', component: ChildComponent },
  // ⬇️ add providers here so the routed component gets Forms providers
  { path: 'form', component: FormComponent, providers: [importProvidersFrom(FormsModule)] },
  { path: 'core', component: AngularcoreComponent },
];
