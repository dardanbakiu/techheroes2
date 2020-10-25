NurseIsLoogedMiddleware = (req,res,next) => {
    if(!req.session.NurseIsLoggedSession) {
        res.redirect('/')
    }

    next()
}

module.exports = NurseIsLoogedMiddleware