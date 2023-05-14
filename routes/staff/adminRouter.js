const express = require('express')
const adminRouter = express.Router()
const adminControls = require('../../controller/staff/adminCtrl')
const islogin = require('../../middlewares/islogin')

adminRouter.post('/register', adminControls.registerAdmCtrl)

adminRouter.post('/login', adminControls.loginAdmCtrl)

adminRouter.get('/', adminControls.getAllAdmCtrl)

adminRouter.get('/:id', islogin, adminControls.getSingleAdmCtrl)

adminRouter.put('/:id', adminControls.updateAdmCtrl)

adminRouter.delete('/:id', adminControls.deleteAdmCtrl)

adminRouter.put('/suspend/teacher/:id', adminControls.suspendTeacherCtrl)

adminRouter.put('/Unsuspend/teacher/:id', adminControls.unsuspendTeacherCtrl)

adminRouter.put('/withdraw/teacher/:id', adminControls.withdrawTeacherCtrl)

adminRouter.put('/Unwithdraw/teacher/:id', adminControls.unwithdrawTeacherCtrl)

adminRouter.put('/publish/exam/:id', adminControls.publishExamCtrl)

adminRouter.put('/Unpublish/exam/:id', adminControls.unpublishExamCtrl)

module.exports = adminRouter