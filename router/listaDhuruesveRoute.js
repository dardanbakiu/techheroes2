const express = require('express');
const router = express.Router();
const db = require("../database");

router.get('/lista_dhuruesve', (req, res) => {
    db.execute("SELECT * FROM shtodhurues", (error,rows,fields)=> {
        res.render('lista_dhuruesve', {rows:rows});
    });
});

exports.route = router; 