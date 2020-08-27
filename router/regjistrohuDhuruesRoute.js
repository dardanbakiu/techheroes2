const express = require('express');
const router = express.Router();
const db = require("../database");

// const User = require("../models/users");

router.get('/regjistrohu_si_dhurues', (req, res) => {
    res.render('regjistrohu_si_dhurues');
});



router.post("/user_reg", (req, res) => {
    const body = req.body;
    const reg_user_emri = body.reg_user_emri;
    const reg_user_mbiemri = body.reg_user_mbiemri;
    const reg_user_dtl = body.reg_user_dtl;
    const reg_user_kontakti = body.reg_user_kontakti;
    const reg_user_email = body.reg_user_email;
    const reg_user_password = body.reg_user_password;
    const reg_user_gr_gjakut = body.reg_user_gr_gjakut;
    const reg_user_semundje = body.reg_user_semundje;
    const reg_user_tatoo = body.reg_user_tatoo;

    console.log(reg_user_tatoo);
    console.log(reg_user_mbiemri);
    console.log(reg_user_dtl);
    console.log(reg_user_kontakti);
    console.log(reg_user_email);
    console.log(reg_user_password);
    console.log(reg_user_gr_gjakut);
    console.log(reg_user_semundje);
    console.log(reg_user_tatoo);

    db.execute("INSERT INTO users(emri,mbiemri,ditelindja,kontakti,email,password,grgjakut,semundje,tatoo) values('" + reg_user_emri + "','" + reg_user_mbiemri + "','" + reg_user_dtl + "','" + reg_user_kontakti + "','" + reg_user_email + "','" + reg_user_password + "','" + reg_user_gr_gjakut + "','" + reg_user_semundje + "','" + reg_user_tatoo + "')     ")
        .then(() => {
            res.render('dhurogjak_shpetojete');
        })
        .catch(err => {
            console.log(err);
        });



});


//func1 ()
// func2()

exports.route = router;