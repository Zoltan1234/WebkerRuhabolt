import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManComponent } from './man.component';

import { ManRoutingModule } from './man-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';

@NgModule({
  declarations: [
    ManComponent
  ],
  imports: [
    CommonModule,
    ManRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSnackBarModule,
    
  ],
  providers: [
    PricePipe
  ]
})
export class ManModule { }
