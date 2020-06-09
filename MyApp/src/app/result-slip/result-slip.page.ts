import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ModalController, NavController } from '@ionic/angular';
import { ResultService } from '../shared/result.service';

import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-result-slip',
  templateUrl: './result-slip.page.html',
  styleUrls: ['./result-slip.page.scss'],

})
export class ResultSlipPage implements OnInit {
  @Input() public Result:any  
  @Input() public Student:any
  
  
  constructor(public router: Router, public modalController: ModalController, public navCtrl: NavController, public resultService: ResultService, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async successAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Result Saved',
      buttons: ['OK']
    });

    await alert.present();
  }

  async failedAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Failed',
      message: 'Result failed to save',
      buttons: ['OK']
    });

    await alert.present();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async Save_pdf(){
    this.router.navigate(["/resultpage/",this.Student._id]);
    /*
    this.resultService.generate_pdf(this.Result,this.Student)
    .subscribe(
      res=>{
        console.log('success')
        this.successAlert()
        
      },
      err=>{
        console.log(err)
        this.failedAlert()
      }
    )
    */
    await this.modalController.dismiss();
  }
}
