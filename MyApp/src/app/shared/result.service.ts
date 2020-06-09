import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  data: any;
  data2: any;
  data3: any;

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http:HttpClient) { }

  get_result(Matric_No: String, Sem: String){
    return this.http.get("http://localhost:3000/api/get_result/"+ Matric_No + "/" + Sem)
  }

  generate_pdf(Result:any, Student:any){
    return this.http.post("http://localhost:3000/api/generate_pdf",{Result:Result, Student:Student}, this.noAuthHeader)
  }

  getname(){
    return this.http.get('http://localhost:3000/api/getname').toPromise();
  }
  
  getresult(_id){
    return this.http.get("http://localhost:3000/api/getresult/"+ _id).toPromise();
  }

  get_course() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise((resolve) => {
      this.http
        .get("http://localhost:3000/api/get_course")
        .subscribe((data) => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  get_selectedmarks(mark_id) {
    console.log("Here " + mark_id);
    return new Promise((resolve) => {
      this.http
        .get("http://localhost:3000/api/get_selectedmarks/" + mark_id)
        .subscribe((data) => {
          this.data3 = data;
          resolve(this.data3);
        });
    });
  }

  get_student(CourseID) {
    return new Promise((resolve) => {
      this.http
        .get("http://localhost:3000/api/get_student/" + CourseID)
        .subscribe((data) => {
          this.data2 = data;
          resolve(this.data2);
        });
    });
  }

  update_mark(mark) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:3000/api/update_mark/" + mark._id, mark, {
        headers: headers,
      })
      .toPromise();
  }
}
