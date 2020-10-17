const express = require('express');
const router = express.Router();
const db = require("../model/database");
const Donors = require('../model/Donors')
const adminAuthMiddleware = require('../middleware/adminAuthMiddleWare');

router.get('/lista_dhuruesve',adminAuthMiddleware, (req, res) => {
    Donors.findAll()
    .then(donor => {
       res.render('lista_marresve', {rows:donor})
    })
   
    // db.execute("SELECT * FROM shtodhurues", (error,rows,fields)=> {
    //     res.render('lista_dhuruesve', {rows:rows});
    // });
});

exports.route = router; 