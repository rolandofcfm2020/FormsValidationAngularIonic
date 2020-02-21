import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { UserFormComponent} from '../user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//https://www.positronx.io/ionic-form-validation-tutorial/


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  entryComponents: [UserFormComponent],
  declarations: [HomePage, UserFormComponent]
})
export class HomePageModule {}
