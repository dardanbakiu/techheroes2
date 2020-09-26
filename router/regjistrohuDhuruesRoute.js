const express = require('express');
const router = express.Router();
const db = require("../model/database");
const User = require('../model/User')

router.get('/regjistrohu_si_dhurues', (req, res) => {
    res.render('regjistrohu_si_dhurues');
});

router.post("/user_reg", (req, res) => {
    const reg_user_tatoo = "Undefined";
    const {reg_user_emri,
        reg_user_mbiemri,
        reg_user_dtl,
        reg_user_kontakti,
        reg_user_email,
        reg_user_password,
        reg_user_gr_gjakut,
        reg_user_semundje} = req.body;
        

    User.create({
        emri: reg_user_emri,
        mbiemri: reg_user_mbiemri,
        ditelindja: reg_user_dtl,
        kontakti: reg_user_kontakti,
        email: reg_user_email,
        password: reg_user_password,
        grgjakut: reg_user_gr_gjakut,
        semundje: reg_user_semundje,
        tatoo: reg_user_tatoo
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    });
});

exports.route = router;