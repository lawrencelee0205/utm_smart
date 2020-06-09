const express = require('express'),
resultCtrl = require('../controller/result.controller'),
studentCtrl = require('../controller/student.controller'),
router = express.Router()

router.get('/api/get_result/:matric_no/:sem',resultCtrl.get_result)
router.post('/api/generate_pdf',resultCtrl.generate_pdf)
router.get("/api/get_student/:id", resultCtrl.get_student);
router.get("/api/get_course", resultCtrl.get_course);
router.get("/api/get_marks", resultCtrl.get_marks);
router.get("/api/get_selectedmarks/:mark_id", resultCtrl.get_selectedmarks);
router.put("/api/update_mark/:mark_id", resultCtrl.update_mark);
router.get('/api/getname',studentCtrl.getname)
router.get('/api/getresult/:id',studentCtrl.getresult)

module.exports = router;
