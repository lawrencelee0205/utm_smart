import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicStaffPage } from './academic-staff.page';

const routes: Routes = [
  {
    path: '',
    component: AcademicStaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicStaffPageRoutingModule {}
