import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ResultService } from '../shared/result.service';
import * as html2pdf from "html2pdf.js"

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.page.html',
  styleUrls: ['./result-page.page.scss'],
})
export class ResultPagePage implements OnInit {

  id: any;
  results:any
  student:any 
  
  constructor(private actRoute: ActivatedRoute,private router: Router, public Service: ResultService) { 
    this.student = {};
    this.results = [];
    this.id = this.actRoute.snapshot.paramMap.get('id');
    //console.log("Student id in result page: " , this.id)
    this.ngOnInit()
  }
 
  ngOnInit() {
    this.getresult(this.id);
    //console.log('result page init')
  }

  ionViewDidLoad() {
    this.ngOnInit()
   
  }

  get_total_CH()
  {
    var CH = 0
    for(var x = 0 ; x < this.results.length ; x++ )
    {      
      CH += this.results[x].Credit_hour
    }

    return CH
  }

  get_png()
  {
    var CH = this.get_total_CH()
    var png = 0
    for(var x = 0 ; x < this.results.length ; x++ )
    {
      png += this.results[x].Pointer *  (this.results[x].Credit_hour / CH)
    }

    return png.toFixed(2)
  }
  
  getresult(id){
    this.Service.getresult(id)
    .then( res => {      
        this.results = res['coursedata'][0]["Course"]        
        this.student = res["student"][0]      
        console.log(res)  
      }
    )
    //console.log("This student: ", this.student)
  }


  createPdf(){
    const option ={
      filename:'result.pdf',
      image:{type:'jpg'},
      html2canvas:{},
      jsPDF:{format: 'letter', orientation: 'portrait' }
    };

    const content: Element=document.getElementById('printable-area');

    html2pdf()
    .from(content)
    .set(option)
    .save();
  }

}
