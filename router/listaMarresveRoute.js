const express = require('express');
const router = express.Router();
const db = require("../model/database");

router.get('/lista_marresve', (req, res) => {
    db.execute("SELECT * FROM shtomarres", (error,rows,fields)=> {
        res.render('lista_marresve', {rows:rows});
    });
});

exports.route = router; 