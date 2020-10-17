AdminIsLoogedMiddleware = (req,res,next) => {
    if(!req.session.AdminIsLoggedSession) {
        res.redirect('/')
    }

    next()
}

module.exports = AdminIsLoogedMiddleware