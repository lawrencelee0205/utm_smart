import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { UpdateResultPageRoutingModule } from "./update-result-routing.module";

import { UpdateResultPage } from "./update-result.page";

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateResultPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdateResultPage],
})
export class UpdateResultPageModule {}
