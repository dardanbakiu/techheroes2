AdminIsLoogedMiddleware = (req,res,next) => {
    if(!req.session.adminIsLoggedSession) {
        res.redirect('/')
    }

    next()
}

module.exports = AdminIsLoogedMiddleware