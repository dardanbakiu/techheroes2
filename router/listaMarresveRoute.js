const express = require('express');
const router = express.Router();
const Receivers = require('../model/Receivers')
const nurseAuthMiddleware = require('../middleware/nurseAuthMiddleWare');

router.get('/lista_marresve', nurseAuthMiddleware, (req, res) => {
    Receivers.findAndCountAll({ order: [['updatedAt', 'DESC']] })
        .then(receiver => {
            res.render('lista_marresve', { isAdded: " ", rows: receiver.rows, totalRows: receiver.count })
        })

});

exports.route = router; 