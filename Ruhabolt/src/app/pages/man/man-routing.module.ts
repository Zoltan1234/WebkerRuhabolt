import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManComponent } from './man.component';

const routes: Routes = [{
  path: '', component: ManComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManRoutingModule { }
