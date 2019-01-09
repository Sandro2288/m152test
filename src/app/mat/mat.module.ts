import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatIconModule,
 } from '@angular/material';



@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
  ]
})

export class MatModule {}
