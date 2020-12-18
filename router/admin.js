const express = require('express')
const router = express.Router()
require('dotenv').config()

router.get('/admin0', (req, res) => {
    res.render('admin')
})

router.post('/adminLogin', (req, res) => {
    const { username, password } = req.body
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        req.session.adminIsLoggedSession = username
        res.render('regjistro_infermier')
    }
    else {
        res.render('admin')
    }
})

exports.route = router