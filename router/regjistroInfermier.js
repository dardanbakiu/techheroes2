const express = require('express');
const router = express.Router();
const Nurse = require('../model/Nurse')
const adminAuthMiddleware = require('../middleware/adminAuthMiddleWare');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
require('dotenv').config();
const bcrypt = require('bcrypt')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PW
    }
});

router.get('/adminRegister', adminAuthMiddleware, (req, res) => {
    res.render('regjistro_infermier', { error: " " });
});

router.post("/nurseRegister", (req, res) => {

    const reg_user_tatoo = "Undefined";
    const { emri, emriSpitalit, lokacioni, email, password } = req.body;

    Nurse.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if (result) {
            console.log(`nurse ekziston`)
            res.render('regjistro_infermier', { error: "Llogaria egziston" });
        }
        else {
            console.log(`Ky nurse nuk egziston`)

            const uuid = uuidv4()
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) console.log(err)

                Nurse.create({
                    emri: emri,
                    emriSpitalit: emriSpitalit,
                    lokacioniSpitalit: lokacioni,
                    email: email,
                    password: hash,
                    verified: 'false',
                    uuid: uuid
                })
                    .then(() => {
                        const domain = process.env.DOMAIN

                        const mailOptions = {
                            from: process.env.EMAIL,
                            to: email,
                            subject: 'Verifiko Admin Llogarine - Dhuro Gjak',
                            text: `Kliko ne kete link qe llogaria jauj te verifikohet ${domain}/verify/nurse/${uuid} `
                        };

                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                            }
                        });

                        res.render('verifiko_llogarine');
                    })
                    .catch(err => {
                        console.log(err)
                        res.redirect('/')
                    });
            })
        }
    }).catch(err => {
        console.log(err)
    })
})

router.get('/verify/nurse/:uuid', (req, res) => {
    const email_UUID = req.params.uuid

    Nurse.update({ verified: "true" }, {
        where: {
            uuid: email_UUID
        }
    })
        .then(result => {
            // ktu duhet me e ba nje faqe ne front end qe llogaria u verifikua me sukses
            res.redirect('/verified')
        })
        .catch(err => {
            console.log(err)
        })
})

exports.route = router;