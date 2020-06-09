import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { ResultService } from "../shared/result.service";
import {
  ModalController,
  NavController,
  AngularDelegate,
} from "@ionic/angular";
import { UpdateResultPage } from "../update-result/update-result.page";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.page.html",
  styleUrls: ["./student-list.page.scss"],
})
export class StudentListPage implements OnInit {
  @Input() public SelectedCourse: any;
  @Input() public Student: any;
  marks: any;
  total_mark: any;

  constructor(
    public router: Router,
    public modalController: ModalController,
    public result_service: ResultService
  ) {
    this.marks = [];
    this.total_mark = [];
  }

  ngOnInit() {
    console.log(this.SelectedCourse);
    console.log(this.Student);
    console.log(this.Student[0].MarkId.Assignment);
    this.calculate_total();
  }

  calculate_total() {
    var i;
    var total;
    for (i = 0; i < this.Student.length; i++) {
      total =
        this.Student[i].MarkId.Assignment +
        this.Student[i].MarkId.Quiz +
        this.Student[i].MarkId.MidTerm +
        this.Student[i].MarkId.Presentation +
        this.Student[i].MarkId.Project +
        this.Student[i].MarkId.Final;
      this.total_mark[i] = total;

      console.log(i + " :" + total);
    }
  }
  update_mark(id) {
    this.modalController.dismiss();

    console.log(id);
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
      },
    };
    this.router.navigate(["/update-result"], navigationExtras);
  }
}
