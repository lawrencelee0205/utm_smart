import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { NgForm, FormBuilder } from "@angular/forms";
import { ResultService } from "../shared/result.service";
import { Router, ActivatedRoute } from "@angular/router";
import { stringify } from "querystring";
import { AlertController } from '@ionic/angular';
@Component({
  selector: "app-update-result",
  templateUrl: "./update-result.page.html",
  styleUrls: ["./update-result.page.scss"],
})
export class UpdateResultPage implements OnInit {
  mark_id: any;
  Assignment: any;
  Quiz: any;
  MidTerm: any;
  Project: any;
  Presentation: any;
  Final: any;
  constructor(
    public modalController: ModalController,
    private result_service: ResultService,
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
  ) {
    this.route.queryParams.subscribe(async (params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.mark_id = this.router.getCurrentNavigation().extras.state.id;
        console.log(this.mark_id);
        console.log(this.mark_id._id);
        this.result_service.get_selectedmarks(this.mark_id._id).then((mark) => {
          this.Assignment = mark["Assignment"];
          this.Quiz = mark["Quiz"];
          this.MidTerm = mark["MidTerm"];
          this.Project = mark["Project"];
          this.Presentation = mark["Presentation"];
          this.Final = mark["Final"];
          console.log("Get dao: " + this.Assignment);
        });

        console.log("Get dao: " + this.Assignment);
      }
    });
  }
  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Result updated',
      buttons: ['OK']
    });

    await alert.present();
  }
  update_mark(form: NgForm) {
    console.log(form.value.Assigment);
    console.log(form.value.Quiz);

    if (
      form.value.Assignment === "" ||
      form.value.Quiz === "" ||
      form.value.MidTerm === "" ||
      form.value.Project === "" ||
      form.value.Presentation === "" ||
      form.value.Final === ""
    ) {
      return;
    }
    this.Assignment = form.value.assignment;
    this.Quiz = form.value.quiz;
    this.MidTerm = form.value.midterm;
    this.Project = form.value.project;
    this.Presentation = form.value.presentation;
    this.Final = form.value.final;
    this.save();
  }

  save(): void {
    let mark = {
      _id: this.mark_id,
      Assignment: this.Assignment,
      Quiz: this.Quiz,
      MidTerm: this.MidTerm,
      Project: this.Project,
      Presentation: this.Presentation,
      Final: this.Final,
    };

    console.log(mark);
    this.result_service.update_mark(mark).then(() => {});
  this.presentAlert()
  }

  close(): void {
    this.navCtrl.navigateBack("/lecturer");
  }
}
