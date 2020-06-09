import { Component, OnInit } from '@angular/core';
import { ResultService } from '../shared/result.service';

@Component({
  selector: 'app-academic-staff',
  templateUrl: './academic-staff.page.html',
  styleUrls: ['./academic-staff.page.scss'],
})

export class AcademicStaffPage implements OnInit {
  students:any

  constructor(private Service: ResultService) { 
    this.ionViewDidLoad();
  }

  ngOnInit() {
  }
  
  ionViewDidLoad(){

    this.Service.getname().then((data) => {
      console.log("academic staff get name: ",data);
      this.students = data;
    });

  }
}
