import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomanComponent } from './woman.component';

const routes: Routes = [{
  path: '', component: WomanComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomanRoutingModule { }
