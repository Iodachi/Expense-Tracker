import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { CategoriesPage } from './categories';

@NgModule({
  declarations: [
    CategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriesPage),
  ],
})
export class CategoriesPageModule {}
