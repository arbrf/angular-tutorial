import { PreloadAllModules, provideRouter, Router, Routes, withPreloading } from '@angular/router';
import { ParentComponent } from './parent/parent/parent.component';
import { ChildComponent } from './child/child/child.component';
import { FormComponent } from './froms/form/form.component';
import { SignalDemoComponent } from './advanced/signal-demo/signal-demo.component';
import { DynamicDemoComponent } from './advanced/dynamic-demo/dynamic-demo.component';

import { SecretComponent } from './advanced/secret/secret.component';
import { signal, inject } from '@angular/core';
import { AdvancedDiDemoComponent } from './advanced/advanced-di-demo/advanced-di-demo.component';


const isLoggedIn = signal(false); // TEMPORARY

export function canActivate() {
  const router = inject(Router);
  return isLoggedIn() || router.createUrlTree(['/']);
}

export const routes: Routes = [
    { path:'', redirectTo:'parent', pathMatch:'full' },
    { path:'parent', component:ParentComponent },
    { path:'child', component:ChildComponent },
    { path:'form', component:FormComponent },
    { path:'signal-demo', component:SignalDemoComponent },
    { path:'dynamic-demo', component:DynamicDemoComponent },
    { path:'advnaced-di', component:AdvancedDiDemoComponent },
    { path: 'secret', component: SecretComponent, canActivate: [canActivate] },
];
