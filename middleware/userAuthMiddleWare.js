DonatorIsLoogedMiddleware = (req,res,next) => {
    if(!req.session.isLoggedSession) {
        res.redirect('/')
    }

    next()
}

module.exports = DonatorIsLoogedMiddleware