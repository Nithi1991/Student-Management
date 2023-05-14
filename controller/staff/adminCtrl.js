const AsyncHandler = require('express-async-handler')
const Admin = require('../../model/staff/admin')
const generateToken = require('../../utils/genrateToken')
const verifyToken = require('../../utils/verifyToken')


module.exports = {
    registerAdmCtrl: AsyncHandler(async (req, res) => {
        const { name, email, password } = req.body

        //check admin exists
        const adminFound = await Admin.findOne({ email })
        if (adminFound) {
            throw new Error("Admin exists")
        }
        const user = await Admin.create({
            name,
            email,
            password
        })
        res.status(201).json({
            status: "success",
            data: user
        })

    }),
    loginAdmCtrl: AsyncHandler(async (req, res) => {
        const { email, password } = req.body

        //find users//
        const user = await Admin.findOne({ email })
        if (!user) {
            return res.json({ message: "user not found" })
        }
        if (user && (await user.verifyPassword(password))) {
            // req.userAuth = user
            const token = generateToken(user._id)

            const verify = verifyToken(token)
            // console.log(verify);

            return res.json({ data: generateToken(user._id), user, verify })
        } else {
            return res.json({ message: "invalid login credentials" })
        }
    }),
    getAllAdmCtrl: (req, res) => {
        try {
            res.status(201).json({
                status: "success",
                data: "all admins"
            })
        } catch (error) {
            res.json({
                status: "failed",
                error: error.message
            })
        }
    },
    getSingleAdmCtrl: (req, res) => {
        try {
            res.status(201).json({
                status: "success",
                data: "single admin"
            })
        } catch (error) {
            res.json({
                status: "failed",
                error: error.message
            })
        }
    },
    updateAdmCtrl: (req, res) => {
        try {
            res.status(201).json({
                status: "success",
                data: "update admin"
            })
        } catch (error) {
            res.json({
                status: "failed",
                error: error.message
            })
        }
    },
    deleteAdmCtrl: (req, res) => {
        try {
            res.status(201).json({
                status: "success",
                data: "admin deleted"
            })
        } catch (error) {
            res.json({
                status: "failed",
                error: error.message
            })
        }
    },
    suspendTeacherCtrl: (req, res) => {
        try {
            res.status(201).json({
                status: "success",
                data: "teacher suspended sucessfully"
            })
        } catch (error) {
            res.json({
                status: "failed",
                error: error.message
            })
        }
    },
    unsuspendTeacherCtrl: (req, res) => {
        try {
            res.status(201).json({
                status: "success",
                data: "teacher Unsuspended sucessfully"
            })
        } catch (error) {
            res.json({
                status: "failed",
                error: error.message
            })
        }
    },
    withdrawTeacherCtrl: (req, res) => {
        try {
            res.status(201).json({
                status: "success",
                data: "teacher withdrawn sucessfully"
            })
        } catch (error) {
            res.json({
                status: "failed",
                error: error.message
            })
        }
    },
    unwithdrawTeacherCtrl: (req, res) => {
        try {
            res.status(201).json({
                status: "success",
                data: "teacher Unwithdrawn sucessfully"
            })
        } catch (error) {
            res.json({
                status: "failed",
                error: error.message
            })
        }
    },
    publishExamCtrl: (req, res) => {
        try {
            res.status(201).json({
                status: "success",
                data: "teacher publish exam"
            })
        } catch (error) {
            res.json({
                status: "failed",
                error: error.message
            })
        }
    },
    unpublishExamCtrl: (req, res) => {
        try {
            res.status(201).json({
                status: "success",
                data: "teacher Unpublish exam"
            })
        } catch (error) {
            res.json({
                status: "failed",
                error: error.message
            })
        }
    }

}