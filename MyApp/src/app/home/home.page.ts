import { Component } from '@angular/core';
import { ResultService } from'../shared/result.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ResultSlipPage } from '../result-slip/result-slip.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Sem: String
  Matric_no: String
  Result:any
  Student:any 

  constructor(private alertCtrl:AlertController ,private result_Service: ResultService, private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ResultSlipPage,
      componentProps: {
        Result : this.Result,
        Student: this.Student
      }
    });

    return await modal.present();// triggered when opening the modal
  }

  async failedAlert(res) {
    const alert = await this.alertCtrl.create({
      header: 'Failure',
      message: res,
      buttons: ['OK']
    });

    await alert.present();
  }

  get_Result(){
    this.result_Service.get_result(this.Matric_no,this.Sem)
    .subscribe(
      res => {

        if(res=="Invalid matric no" || res=="No result found" )
        {
          this.failedAlert(res)
        }
        else
        {
        console.log(res)
        this.Result = res["r"][0]["Course"]
        this.Student = res["student"][0]
        console.log(this.Result)
        console.log(this.Student._id)
        this.openModal();
        }
      },
      err => {
        console.log(err)
      }
    )
  }

}
