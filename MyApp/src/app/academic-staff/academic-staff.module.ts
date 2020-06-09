import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademicStaffPageRoutingModule } from './academic-staff-routing.module';

import { AcademicStaffPage } from './academic-staff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademicStaffPageRoutingModule
  ],
  declarations: [AcademicStaffPage]
})
export class AcademicStaffPageModule {}
