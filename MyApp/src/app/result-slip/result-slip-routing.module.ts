import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultSlipPage } from './result-slip.page';

const routes: Routes = [
  {
    path: '',
    component: ResultSlipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultSlipPageRoutingModule {}
