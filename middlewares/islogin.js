const isLogin = (req, res, next) => {
    const islogin = req.userAuth
    if (islogin) {
        next()
    } else {
        const err = new Error("You are not logged in")
        next(err)
    }
}

module.exports = isLogin