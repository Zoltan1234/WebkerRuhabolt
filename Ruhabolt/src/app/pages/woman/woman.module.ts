import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomanRoutingModule } from './woman-routing.module';
import { WomanComponent } from './woman.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';





@NgModule({
  declarations: [
    WomanComponent
  ],
  imports: [
    CommonModule,
    WomanRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSnackBarModule
  ],
  providers: [
    PricePipe,
  ]
})
export class WomanModule { }
