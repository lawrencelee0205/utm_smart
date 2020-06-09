import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateResultPage } from './update-result.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateResultPageRoutingModule {}
