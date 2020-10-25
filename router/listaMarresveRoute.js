const express = require('express');
const router = express.Router();
const db = require("../model/database");
const Receivers = require('../model/Receivers')
const nurseAuthMiddleware = require('../middleware/nurseAuthMiddleWare');

router.get('/lista_marresve',nurseAuthMiddleware, (req, res) => {
    Receivers.findAll()
        .then(receiver => {
           res.render('lista_marresve', {rows:receiver})
        })
    
    });
    // db.execute("SELECT * FROM shtomarres", (error,rows,fields)=> {
    //     res.render('lista_marresve', {rows:rows});
    // });


exports.route = router; 