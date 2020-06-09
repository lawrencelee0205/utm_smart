const mongoose = require('mongoose'),
Student=mongoose.model('Student'),
Result=mongoose.model('Result')

const getname = function(req,res,next){
    console.log("fetching student");

    Student.find(function(err,data){
        if(err){
            res.send(err)
        }
        res.json(data);
    });
}

const getresult = function(req,res){
    
    _id=req.params.id    
    console.log("student id : ",_id)
    //console.log("Student id in params: ",_id)
    Student.find({"_id":Object(_id)})
        .then((result)=>{
            var r_id = result[0]._doc.Result_ID[0].Id
            console.log("Result : ",r_id)
            //console.log("Result id in ctrl: ",r_id)
            Result.find({"_id":Object(r_id)}).then(result_data => {                
                res.status(200).json({student:result,coursedata:result_data})
            })
        })
}

module.exports = {
    getname,
    getresult
}