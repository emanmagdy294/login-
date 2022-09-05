import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
const materialComponent = [
  MatIconModule,
  MatButtonModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponent
  ],
  exports: [
    materialComponent,
  ]
})
export class MaterialModule { }
