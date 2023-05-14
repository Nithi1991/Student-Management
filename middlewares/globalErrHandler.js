
module.exports = {
    globalErrHandler: (err, req, res, next) => {
        //status
        //message
        //stack
        const stack = err.stack
        const message = err.message
        const status = err.status ? err.status : "failed"
        const statusCode = err.statusCode ? err.stack : 500
        res.status(statusCode).json({
            status,
            message,
            stack
        })
    },
    notFoundErr: (req, res, next) => {
        const err = new Error(`cant find the ${req.originalUrl} on the server`)
        next(err)
    }
}