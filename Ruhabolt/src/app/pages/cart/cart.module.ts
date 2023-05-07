import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from './cart.component';
import { MatIconModule } from '@angular/material/icon';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [
    PricePipe
  ]
})
export class CartModule { }
