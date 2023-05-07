import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { OrderComponent } from './order.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    OrderRoutingModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    PricePipe
  ]
})
export class OrderModule { }
