import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
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
        path: 'newrecipe',
        component: NewRecipeComponent
      }

    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
