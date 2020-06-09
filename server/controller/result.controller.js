const mongoose = require('mongoose'),
Student = mongoose.model('Student'),
Result = mongoose.model('Result'),
Course = mongoose.model('Course'),
Mark = mongoose.model('Mark'),
PDFDocument = require('pdfkit'),
fs = require('fs')

const get_result = function(req, res, next){

    Matric_No = req.params.matric_no
    Sem = req.params.sem
    console.log("CTRL: ",Matric_No, Sem);
    Student.find({matric : Matric_No})
    .then((result) => {
        if(!result)
        {
            console.log(err)
        }
        else
        {   
          var result_length = result[0]._doc.Result_ID.length
          console.log("Student result length: ",result[0]._doc.Result_ID.length);
          console.log("Sem: ",result[0]._doc.Result_ID[0].Sem);
          
          if(result[0]==undefined)
            {
                return res.status(200).json("Invalid matric no")
            }

          for(i=0 ; i<result_length; i++)
            {
              console.log("Item: ",result[0]._doc.Result_ID[i].Id,result[0]._doc.Result_ID[i].Sem)
              var R_Sem = result[0]._doc.Result_ID[i].Sem;
              var R_Id =  result[0]._doc.Result_ID[i].Id;
              if(R_Sem == Sem )
              {
                console.log("Found");
                Result.find({"_id":Object(R_Id)})
                .then((doc) => {
                  if(!doc){
                    console.log(err)
                  }
                  else
                  {
                    return res.status(200).json({ student: result , r : doc});
                  }
                })
              }
            }
        }
    })
}

const generate_pdf = function(req, res, next){
    // Create a document
    const doc = new PDFDocument();
        
    result = req.body.Result
    student = req.body.Student

    var pointer_sum = 0
    var credit_hour_sum = 0

    for (i=0;i<result.length;i++)
    {
        credit_hour_sum += result[i]["Credit_hour"]
    }
    

    doc.pipe(fs.createWriteStream('C:/Users/lawre/Desktop/'+student["Matric_No"]+'.pdf'));

    doc.text(student["Name"],x=100,y=20).moveDown()

    doc.fontSize(15).text("Course Name", x=100, y=40)
    doc.fontSize(15).text("Credit_hour",x=300,  y=40)
    doc.fontSize(15).text("Pointer", x=450,     y=40)
    
    for (i=0; i<result.length;i++)
    {
        
        doc.fontSize(15).text(result[i]["Name"], x=100, y=60+i*20)
        doc.fontSize(15).text(result[i]["Credit_hour"],x=300, y=60+i*20)
        doc.fontSize(15).text(result[i]["Pointer"], x=450, y=60+i*20)

        pointer_sum += result[i]["Pointer"] * (result[i]["Credit_hour"]/credit_hour_sum) 
    }

    doc.fontSize(13).text("GPA", x=100, y=150)
    doc.fontSize(15).text(pointer_sum, x=200, y=150)
    // Finalize PDF file
    doc.end();

        if(doc)
        {
            return res.status(200).json("Success")
        }
        else
        {
            return res.status(404).json("Failed")
        }

}

const get_student = function (req, res, next) {
    var courseId = req.params.id;
    console.log("Get student data.", courseId);
    Course.findOne({ _id: courseId })
      .populate("Student.StudentId")
      .populate("Student.MarkId")
      .exec()
      .then((doc) => {
        if (doc) {
          // console.log(doc);
          res.status(200).json(doc);
        } else {
          res.status(200).json({ message: "Course not found" });
        }
      });
  };
  
const get_course = function (req, res, next) {
  console.log("Get course run")
    Course.find(function (err, result) {
      if (!result) {
        console.log(err);
      } else {
        //   console.log(result);
        for (i = 0; i < result[0].length; i++) {
          console.log(result[i].Code);
        }
      }
      return res.status(200).json({ course_list: result });
    });
  };
  
  const get_marks = function (req, res, next) {
    // var mark_id = req.param.markID;
    var mark_id = "5eae75cdef3fda16e0615fca";
  
    Mark.find({ _id: mark_id }).then((result) => {
      if (!result) {
        console.log(err);
      } else {
        return res.status(200).json({ mark_result: result });
      }
    });
  };
  
  const get_selectedmarks = function (req, res) {
    console.log("fetching student mark");
    const id = req.param.mark_id;
    Mark.findById({ _id: req.params.mark_id }, async (err, mark) => {
      if (err) res.status(404).json(err);
      res.status(200).json(mark);
    });
  };
  
  const update_mark = function (req, res) {
    console.log("Update here");
    console.log(req.body);
    console.log(req.body._id);
  
    const id = req.body._id._id;
    Mark.findById({ _id: id }, (err, recs) => {
      if (err) {
        console.dir(err);
      } else {
        recs.Assignment = req.body.Assignment || recs.Assignment;
        recs.Quiz = req.body.Quiz || recs.Quiz;
        recs.MidTerm = req.body.MidTerm || recs.MidTerm;
        recs.Project = req.body.Project || recs.Project;
        recs.Presentation = req.body.Presentation || recs.Presentation;
        recs.Final = req.body.Final || recs.Final;
  
        recs.save((err, recs) => {
          if (err) {
            res.status(500).send(err);
          }
  
          res.json({ records: recs });
        });
      }
    });
  };


module.exports = {
    get_result,
    generate_pdf,
    get_student,
    get_course,
    get_marks,
    get_selectedmarks,
    update_mark
}