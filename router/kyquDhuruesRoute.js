const express = require('express');
const router = express.Router();
const db = require("../model/database");
const User = require('../model/User');


const loginErrorStatement = {
    noerror: " ",
    pwerror: 'Passwordi eshte gabim!',
    emailerror: 'Email eshte gabim!',
    allerror: 'Passwordi dhe Email jane gabim!'
};

router.get('/kycu_dhurues', (req, res) => {
    res.render('kycu_si_dhurues', { errorStatement: loginErrorStatement.noerror });
});

router.post('/kycu_dhurues_form', async (req, res) => {
    const body = req.body;
    const email = body.kycu_dhurues_email;
    const password = body.kycu_dhurues_pw;

    User.findAll({
        where: {
            email: email,
            password: password
        }
    })
        .then(result => {
            const dbEmail = result[0].dataValues.email
            const dbPw = result[0].dataValues.password
        
            console.log(`db email ${dbEmail} db pw: ${dbPw}`)
        
            const isLogged = (dbEmail === email && dbPw === password) ? true : false
        
            console.log(isLogged)
        
            if (isLogged) {
                req.session.isLoggedSession = email
                console.log(req.session.isLoggedSession)
                
                res.redirect(`/profili_dhuruesit/${email}`)
            }
    
        })
        .catch(err => {
            res.redirect('/kycu_dhurues')
        })

    
    // ///////////////////////////////////////////////////////

    // db.execute("SELECT * FROM users where email='" + email + "' and password='" + password + "';", (error, rows, fields) => {
    //     console.log(rows.length);
    //     var loginValid = rows.length;

    //     if (loginValid != 0) {
    //         global.dhurues = true;
    //         global.admin.logged = false;
    //         global.tokenProfile.logged = true;


    //         db.query("select * from users where email='" + email + "' and password='" + password + "';", function (err, result, fields) {
    //             if (err) throw err;
    //             console.log("qetu  :" + result[0].email);

    //             const token = jwt.sign({
    //                 email: result[0].email
    //             }, 'secret', { expiresIn: 60 /* 5min */ });

    //             console.log(token)

    //             db.query("select * from shtodhurues where email='" + email + "' ;", function (err, result2, fields) {
    //                 if (result2.length != 0) {
    //                     global.tokenProfile.historia = result2[0].sasia + " ml";
    //                     global.tokenProfile.emri = result[0].emri;
    //                     global.tokenProfile.mbiemri = result[0].mbiemri;
    //                     global.tokenProfile.kontakti = result[0].kontakti;
    //                     global.tokenProfile.grgjakut = result[0].grgjakut;
    //                     console.log("qetuuuuuuu: " + JSON.stringify(result2) + ' email:' + email);

    //                     // console.log(`email: ${result[0].email}`)

    //                     res.render('dhurogjak_shpetojete', {token:token});
    //                 }
    //                 else {
    //                     global.tokenProfile.historia = " 0 ml";
    //                     global.tokenProfile.emri = result[0].emri;
    //                     global.tokenProfile.mbiemri = result[0].mbiemri;
    //                     global.tokenProfile.kontakti = result[0].kontakti;
    //                     global.tokenProfile.grgjakut = result[0].grgjakut;
    //                     res.render('dhurogjak_shpetojete');

    //                 }
    //             });
    //         });
    //     }

    //     else {
    //         global.dhurues = false;
    //         global.admin.logged = true;
    //         global.tokenProfile.logged = false;
    //         res.render('kycu_si_dhurues', { errorStatement: loginErrorStatement.allerror });
    //     }
    // });
});

exports.route = router;
