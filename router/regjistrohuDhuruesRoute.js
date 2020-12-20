const express = require('express');
const router = express.Router();
const db = require("../model/database");
const User = require('../model/User')
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
require('dotenv').config();
const bcrypt = require('bcrypt')

router.get('/regjistrohu_si_dhurues', (req, res) => {
    res.render('regjistrohu_si_dhurues', { error: " " });
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PW
    }
});

router.post("/user_reg", (req, res) => {
    const reg_user_tatoo = "Undefined";
    const { reg_user_emri,
        reg_user_mbiemri,
        reg_user_dtl,
        reg_user_kontakti,
        reg_user_email,
        reg_user_password,
        reg_user_gr_gjakut,
        reg_user_semundje } = req.body;

    User.findOne({
        where: {
            email: reg_user_email
        }
    }).then(result => {
        if (result) {
            console.log(`useri ekziston`)
            res.render('regjistrohu_si_dhurues', { error: "Ju tashme keni nje llogari" });
        }
        else {
            console.log(`Ky user nuk egziston`)

            const uuid = uuidv4()
            bcrypt.hash(reg_user_password, 10, (err, hash) => {
                if (err) console.log(err)
                User.create({
                    emri: reg_user_emri,
                    mbiemri: reg_user_mbiemri,
                    ditelindja: reg_user_dtl,
                    kontakti: reg_user_kontakti,
                    email: reg_user_email,
                    password: hash,
                    grgjakut: reg_user_gr_gjakut,
                    semundje: reg_user_semundje,
                    tatoo: reg_user_tatoo,
                    verified: 'false',
                    uuid: uuid
                })

                    .then(() => {
                        //ketu duhet me programu me dergu ne email linkun

                        const domain = process.env.DOMAIN

                        const mailOptions = {
                            from: process.env.EMAIL,
                            to: reg_user_email,
                            subject: 'Verifiko Llogarine - Dhuro Gjak',
                            text: `Kliko ne kete link qe llogaria jauj te verifikohet ${domain}/verify/${uuid} `
                        };

                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                            }
                        });


                        // Ktu posht duhet me e bo qe met qu te faqja kontrollo emailin etj etj
                        res.render('verifiko_llogarine');
                    })
                    .catch(err => {
                        res.redirect('/')
                    });
            })
        }
    }).catch(err => {
        console.log(err)
    })

});


router.get('/verify/:uuid', (req, res) => {
    const email_UUID = req.params.uuid

    User.update({ verified: "true" }, {
        where: {
            uuid: email_UUID
        }
    })
        .then(result => {
            // ktu duhet me e ba nje faqe ne front end qe llogaria u verifikua me sukses
            res.render("llogaria_u_verifikua")
        })
        .catch(err => {
            console.log(err)
        })

})

router.get('/verifiko', (req, res) => {
    res.render('verifiko_llogarine');
})

router.get('/verified', (req, res) => {
    res.render("llogaria_u_verifikua")
})


exports.route = router;