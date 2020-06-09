const mongoose = require('mongoose')

var StudentSchema = new mongoose.Schema({
    name: String,
    ic: String,
    matric: String,
    faculty: String,
    program: String,
    year: Number,
    pa: String,
    sc: String,
    Result_ID: [{
        Id:String,
        Sem:String
    }]
})

var ResultSchema = new mongoose.Schema({
    Course:
    [{
     Name:String,
     Code:String,
     Credit_hour:Number,
     Grade:String,
     Pointer:Number
    }]  
})

var CourseSchema = new mongoose.Schema({
    Course_Name: String,
    Code: String,
    Section: String,
    Student: [{
        StudentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Student'
        },
        MarkId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Mark'
        }
      }]
    });

/*Define schema*/
var MarkSchema = new mongoose.Schema({
    Assignment: {type : Number},
    Quiz: {type :Number},
    MidTerm: {type: Number},
    Project: {type:Number},
    Presentation: {type: Number},
    Final: {type: Number}

})

mongoose.model('Student',StudentSchema,'Student');
mongoose.model('Result',ResultSchema,'Result');
mongoose.model('Course', CourseSchema, 'Course');
mongoose.model('Mark', MarkSchema, 'Mark');