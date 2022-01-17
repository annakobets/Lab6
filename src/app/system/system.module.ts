import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { MainComponent } from './main/main.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { SystemComponent } from './system.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from '../shared/component/footer/footer.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { DropdownDirective } from '../shared/directive/dropdown.directive';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { AddRecipeComponent } from './new-recipe/add-recipe/add-recipe.component';
import { EditeRecipeComponent } from './new-recipe/edite-recipe/edite-recipe.component';
import { Record } from '../shared/models/record.model';
import { RecordService } from '../shared/services/record.service';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    MainComponent,
    RecipesComponent,
    PersonalAccountComponent,
    SystemComponent, 
    FooterComponent,
    HeaderComponent,
    DropdownDirective,
    NewRecipeComponent,
    AddRecipeComponent,
    EditeRecipeComponent,
    AddComponent,
    EditComponent,

  ],
  imports: [
    CommonModule,
    SystemRoutingModule, 
    SharedModule
    
  ],
  providers:
  [
    RecordService
  ]
})
export class SystemModule { }
