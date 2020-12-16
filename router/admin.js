const express = require('express')
const router = express.Router()

router.get('/aadminn', (req, res) => {
    res.render('admin')
})

router.post('/adminLogin', (req, res) => {
    const { username, password } = req.body
    if (username === 'admin' && password === 'admin') {
        req.session.adminIsLoggedSession = username
        res.render('regjistro_infermier')
    }
    else {
        res.redirect('/aadminn')
    }
})

exports.route = router