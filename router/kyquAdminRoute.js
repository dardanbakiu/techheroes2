const express = require('express');
const router = express.Router();
const Nurse = require('../model/Nurse') //modeli per tabelen Admin
const db = require('../model/db') // lidhja me db

router.get('/kycu_admin', (req, res) => {
    res.render('kycu_si_administrator', { error: " " });
});

router.post('/kycu_admin_btn', (req, res) => {
    const email = req.body.kycu_admin_email;
    const password = req.body.kycu_admin_password;

    Nurse.findAll({
        where: {
            email: email,
            password: password
        }
    })
        .then(result => {
            const dbEmail = result[0].dataValues.email
            const dbPw = result[0].dataValues.password
            const verified = result[0].dataValues.verified

            if (dbEmail === email && dbPw === password) {
                if (verified === 'true') {
                    req.session.NurseIsLoggedSession = email
                    console.log(req.session.NurseIsLoggedSession)

                    res.redirect(`/depozita`)
                }
                else {
                    res.render('kycu_si_administrator', { error: "Verifikoni llogarine tuaj permes Email-it" })
                }
            }

        })
        .catch(err => {
            res.render('kycu_si_administrator', { error: "email ose password jane gabim" })
        })

    // const body = req.body;

    // const username = body.kycu_admin_username;
    // const password = body.kycu_admin_password;

    // // console.log(username + " " + password);
    // if ((username == "admin") && (password == "admin")) {
    //     console.log("Admin is logged");
    //     req.session.AdminIsLoggedSession = username
    //     console.log(req.session.AdminIsLoggedSession)

    //     res.redirect(`/depozita`)
    // }
    // else {
    //     console.log(password);
    //     res.redirect('/kycu_admin');
    // }


});

router.post('/dil', (req, res) => {
    global.admin.logged = false;
    global.dhurues = false;
    res.render('dhurogjak_shpetojete');
});


exports.route = router;
