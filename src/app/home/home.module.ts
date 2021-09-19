import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/assets/shared/filter/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    ],
    exports: [UserComponent,FilterPipe]
})
export class HomeModule { }
