const express = require('express');
const router = express.Router();
const db = require("../model/database");
const User = require('../model/User');
const bcrypt = require('bcrypt')

const loginErrorStatement = {
    noerror: " ",
    pwerror: 'Passwordi eshte gabim!',
    emailerror: 'Email eshte gabim!',
    allerror: 'Passwordi dhe Email jane gabim!'
};

router.get('/kycu_dhurues', (req, res) => {
    res.render('kycu_si_dhurues', { error: " " });
});

router.post('/kycu_dhurues_form', async (req, res) => {
    // const body = req.body;
    const email = req.body.kycu_dhurues_email;
    const password = req.body.kycu_dhurues_pw;

    User.findAll({
        where: {
            email: email,
            // password: password
        }
    })
        .then(result => {
            const dbEmail = result[0].dataValues.email
            const dbPw = result[0].dataValues.password
            const isVerified = result[0].dataValues.verified

            console.log(`Verifikimiiiii : ${isVerified}`)
            bcrypt.compare(password, dbPw, (err, result) => {
                if (!result) {
                    res.render('kycu_si_dhurues', { error: "email/password jane gabim" })
                }
                else {
                    if (isVerified == "true") {
                        req.session.isLoggedSession = email
                        console.log(req.session.isLoggedSession)
                        res.redirect(`/profili_dhuruesit/${email}`)
                    }
                    else {
                        res.render('kycu_si_dhurues', { error: "Verifikoni llogarine tuaj permes emailit" })
                    }
                }
            })

            // if (dbEmail === email && dbPw === password) {
            //     if (isVerified == "true") {
            //         req.session.isLoggedSession = email
            //         console.log(req.session.isLoggedSession)
            //         res.redirect(`/profili_dhuruesit/${email}`)
            //     }
            //     else {
            //         res.render('kycu_si_dhurues', { error: "Verifikoni llogarine tuaj permes emailit" })
            //     }
            // }

        })
        .catch(err => {
            console.log("nuk keni mujt mu llogu", err)
            // res.render('kycu_si_dhurues', { error: "email/password jane gabim" })
        })


});

exports.route = router;
