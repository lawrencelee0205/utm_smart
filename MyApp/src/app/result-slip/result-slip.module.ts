import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultSlipPageRoutingModule } from './result-slip-routing.module';

import { ResultSlipPage } from './result-slip.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultSlipPageRoutingModule
  ],
  declarations: [ResultSlipPage]
})
export class ResultSlipPageModule {}
