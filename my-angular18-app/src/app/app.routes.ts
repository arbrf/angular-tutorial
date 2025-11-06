import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent/parent.component';
import { ChildComponent } from './child/child/child.component';
import { FormComponent } from './froms/form/form.component';

export const routes: Routes = [
    {path:'',redirectTo:'parent',pathMatch:'full'},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'form',component:FormComponent}
    
];
