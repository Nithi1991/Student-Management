const express = require('express')
const morgan = require('morgan')
const adminRouter = require('../routes/staff/adminRouter')
const errHandlers = require('../middlewares/globalErrHandler')

const app = express()

//-----middlewares---//
app.use(morgan("dev"))
app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method},${req.originalUrl}`);
    next()
})

let user = {
    name: "nitheesh",
    isAdmin: true,
    islogin: true
}

const islogin = (req, res, next) => {
    if (user.islogin) {
        next()
    } else {
        res.status(401).json({ msg: "Unauthorized" })
    }
}

const isAdmin = (req, res, next) => {
    if (user.isAdmin) {
        next()
    } else {
        res.status(401).json({ msg: "Unauthorized" })
    }
}

app.use(isAdmin)

app.use('/api/v1/admins', adminRouter)

//error handler
app.use(errHandlers.notFoundErr)
app.use(errHandlers.globalErrHandler)

module.exports = app