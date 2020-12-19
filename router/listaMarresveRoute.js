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

router.post("/lista_marresve_email", nurseAuthMiddleware, (req, res) => {
    const emriMbiemri = req.body.searchDonnor
    const emriMbiemriSplit = emriMbiemri.split(' ')
    console.log(emriMbiemriSplit)

    const emri = emriMbiemriSplit[0]
    const mbiemri = emriMbiemriSplit[1]
    Receivers.findAndCountAll({ order: [['updatedAt', 'DESC']], where: { emri: emri, mbiemri: mbiemri } })
        .then(receiver => {
            res.render('lista_marresve', { isAdded: " ", rows: receiver.rows, totalRows: receiver.count })
        })
})

exports.route = router; 