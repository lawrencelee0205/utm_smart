import { Component, OnInit } from '@angular/core'
import { ResultService } from "../shared/result.service"
import { ModalController } from "@ionic/angular"
import { StudentListPage } from "../student-list/student-list.page"
import { NgModel } from "@angular/forms"

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.page.html',
  styleUrls: ['./lecturer.page.scss'],
})
export class LecturerPage implements OnInit {

  Courses: any[];
  Code: String;
  Section: String;
  Student: any;
  SelectedCourseID: any;
  SelectedCourse: any;

  constructor( private result_Service: ResultService, private modalController: ModalController) { 
    this.ionViewDidLoad();
  }

  ngOnInit() {
  }
  ionViewDidLoad() {
    this.result_Service.get_course().then((data) => {
      console.log(data["course_list"]);
      this.Courses = data["course_list"];
    });
  }
  async openModal() {
   const modal = await this.modalController.create({
     component: StudentListPage,
      cssClass: "mymodal",
     componentProps: {
       SelectedCourse: this.SelectedCourse,
        Student: this.Student,
      },
    });
    return await modal.present();
  }

  get_student() {
    console.log(this.SelectedCourseID);
    this.result_Service.get_student(this.SelectedCourseID).then((data) => {
      console.log(data);
      this.SelectedCourse = data;
      console.log(data["Student"]);
      this.Student = data["Student"];
      
    
      this.openModal();
      if (data["Student"].length == 0) {
        console.log("No student");
      }
    });
  }
}
