const express = require('express');
const router = express.Router();
const db = require("../model/database");
const Donors = require('../model/Donors')
const nurseAuthMiddleware = require('../middleware/nurseAuthMiddleWare');

router.get('/lista_dhuruesve', nurseAuthMiddleware, (req, res) => {
    Donors.findAndCountAll({ order: [['updatedAt', 'DESC']] })
        .then(donor => {
            res.render('lista_dhuruesve', { isAdded: " ", rows: donor.rows, totalRows: donor.count })
        })
});

router.post("/lista_dhuruesve_email", nurseAuthMiddleware, (req, res) => {
    const email = req.body.searchDonnor
    Donors.findAndCountAll({ order: [['updatedAt', 'DESC']], where: { email: email } })
        .then(donor => {
            res.render('lista_dhuruesve', { isAdded: " ", rows: donor.rows, totalRows: donor.count })
        })
})

exports.route = router; 