const express = require('express');
const router = express.Router();
const db = require("../model/database");
const Donors = require('../model/Donors')
const nurseAuthMiddleware = require('../middleware/nurseAuthMiddleWare');

router.get('/lista_dhuruesve', nurseAuthMiddleware, (req, res) => {
    Donors.findAll()
        .then(donor => {
            res.render('lista_dhuruesve', { rows: donor })
        })
});

exports.route = router; 