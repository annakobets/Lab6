import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { MainComponent } from './main/main.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SystemComponent } from './system.component';


const routes: Routes = 
[
  {
    path:'system',
    component: SystemComponent, 
    children: 
    [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'recipes',
        component: RecipesComponent
      },
      {
          path: 'personal-account',
          component: PersonalAccountComponent
      },
      {
        path: 'edit',
        component: EditComponent
      },
      {
        path: 'add',
        component: AddComponent
      }

    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
