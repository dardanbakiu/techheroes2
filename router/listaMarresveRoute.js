const express = require('express');
const router = express.Router();
const Receivers = require('../model/Receivers')
const nurseAuthMiddleware = require('../middleware/nurseAuthMiddleWare');

router.get('/lista_marresve', nurseAuthMiddleware, (req, res) => {
    Receivers.findAll()
        .then(receiver => {
            res.render('lista_marresve', { rows: receiver })
        })

});

exports.route = router; 