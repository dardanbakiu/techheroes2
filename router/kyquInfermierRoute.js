const express = require('express');
const router = express.Router();
const Nurse = require('../model/Nurse') //modeli per tabelen Admin
const db = require('../model/db') // lidhja me db
const bcrypt = require('bcrypt')

router.get('/infermier', (req, res) => {
    res.render('kycu_si_infermier', { error: " " });
});

router.post('/kycuInfermier', (req, res) => {
    const email = req.body.kycu_admin_email;
    const password = req.body.kycu_admin_password;

    Nurse.findAll({
        where: {
            email: email,
            // password: password
        }
    }).then(result => {
        const dbEmail = result[0].dataValues.email
        const dbPw = result[0].dataValues.password
        const verified = result[0].dataValues.verified

        const match = bcrypt.compareSync(password, dbPw);
        // bcrypt.compare(password, dbPw, (err, result) => {
        if (!match) {
            res.render('kycu_si_infermier', { error: "email/password jane gabim" })
        }
        else {
            if (verified === 'true') {
                req.session.NurseIsLoggedSession = email
                console.log(req.session.NurseIsLoggedSession)

                res.redirect(`/depozita`)
            }
            else {
                res.render('kycu_si_infermier', { error: "Verifikoni llogarine tuaj permes Email-it" })
            }
        }
        // if (dbEmail === email && dbPw === password) {
        //     if (verified === 'true') {
        //         req.session.NurseIsLoggedSession = email
        //         console.log(req.session.NurseIsLoggedSession)

        //         res.redirect(`/depozita`)
        //     }
        //     else {
        //         res.render('kycu_si_infermier', { error: "Verifikoni llogarine tuaj permes Email-it" })
        //     }
        // }
        // })
    })
        .catch(err => {
            console.log("nuk keni mujt mu llogu", err)
            res.render('kycu_si_infermier', { error: "email/password jane gabim" })
        })
});

router.post('/dil', (req, res) => {
    global.admin.logged = false;
    global.dhurues = false;
    res.render('dhurogjak_shpetojete');
});


exports.route = router;
