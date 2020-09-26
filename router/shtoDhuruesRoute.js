const express = require('express');
const router = express.Router();
const db = require("../model/database");

const Donors = require('../model/Donors')
const Deposits = require('../model/Deposits')

router.get('/shto_dhurues', (req, res) => {
    res.render('shto_dhurues');
});

router.post('/shto_dhurues_form', async (req, res) => {
    const { shto_dhurues_emri,
        shto_dhurues_mbiemri,
        shto_dhurues_email,
        shto_dhurues_gr_gjakut,
        shto_dhurues_kontakti,
        shto_dhurues_sasia } = req.body;

    Donors.create({
        emri: shto_dhurues_emri,
        mbiemri: shto_dhurues_mbiemri,
        email: shto_dhurues_email,
        grgjakut: shto_dhurues_gr_gjakut,
        kontakti: shto_dhurues_kontakti,
        sasia: shto_dhurues_sasia
    })
        .then(() => {
            if (shto_dhurues_gr_gjakut == "A-") {
                Deposits.create({
                    Anegativ: shto_dhurues_sasia
                })
            }

            if (shto_dhurues_gr_gjakut == "A+") {
                Deposits.create({
                    Apozitiv: shto_dhurues_sasia
                })
            }

            if (shto_dhurues_gr_gjakut == "B+") {
                Deposits.create({
                    Bpozitiv: shto_dhurues_sasia
                })
            }

            if (shto_dhurues_gr_gjakut == "B-") {
                Deposits.create({
                    Bnegativ: shto_dhurues_sasia
                })
            }

            if (shto_dhurues_gr_gjakut == "AB+") {
                Deposits.create({
                    ABpozitiv: shto_dhurues_sasia
                })
            }

            if (shto_dhurues_gr_gjakut == "AB-") {
                Deposits.create({
                    ABnegativ: shto_dhurues_sasia
                })
            }

            if (shto_dhurues_gr_gjakut == "O-") {
                Deposits.create({
                    Onegativ: shto_dhurues_sasia
                })
            }

            if (shto_dhurues_gr_gjakut == "O+") {
                Deposits.create({
                    Opozitiv: shto_dhurues_sasia
                })
            }
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))


    // db.execute("INSERT INTO shtodhurues (emri,mbiemri,email,grgjakut,kontakti,sasia) values('" + shto_dhurues_emri + "','" + shto_dhurues_mbiemri + "','" + shto_dhurues_email + "','" + shto_dhurues_gr_gjakut + "','" + shto_dhurues_kontakti + "','" + shto_dhurues_sasia + "'); ")
    //     .then(() => {
    //         if (shto_dhurues_gr_gjakut == "A-") {
    //             db.execute("INSERT INTO depozita (Anegativ) values(" + shto_dhurues_sasia + "); ")
    //                 .then(() => { res.render('shto_dhurues') })
    //                 .catch(err => { console.log(err) });
    //         }

    //         else if (shto_dhurues_gr_gjakut == "A+") {
    //             db.execute("INSERT INTO depozita (Apozitiv) values(" + shto_dhurues_sasia + "); ")
    //                 .then(() => { res.render('shto_dhurues') })
    //                 .catch(err => { console.log(err) });
    //         }

    //         else if (shto_dhurues_gr_gjakut == "B-") {
    //             db.execute("INSERT INTO depozita (Bnegativ) values(" + shto_dhurues_sasia + "); ")
    //                 .then(() => { res.render('shto_dhurues') })
    //                 .catch(err => { console.log(err) });
    //         }

    //         else if (shto_dhurues_gr_gjakut == "B+") {
    //             db.execute("INSERT INTO depozita (Bpozitiv) values(" + shto_dhurues_sasia + "); ")
    //                 .then(() => { res.render('shto_dhurues') })
    //                 .catch(err => { console.log(err) });
    //         }

    //         else if (shto_dhurues_gr_gjakut == "AB+") {
    //             db.execute("INSERT INTO depozita (ABpozitiv) values(" + shto_dhurues_sasia + "); ")
    //                 .then(() => { res.render('shto_dhurues') })
    //                 .catch(err => { console.log(err) });
    //         }
    //         else if (shto_dhurues_gr_gjakut == "AB-") {
    //             db.execute("INSERT INTO depozita (ABnegativ) values(" + shto_dhurues_sasia + "); ")
    //                 .then(() => { res.render('shto_dhurues') })
    //                 .catch(err => { console.log(err) });
    //         }

    //         else if (shto_dhurues_gr_gjakut == "O-") {
    //             db.execute("INSERT INTO depozita (Onegativ) values(" + shto_dhurues_sasia + "); ")
    //                 .then(() => { res.render('shto_dhurues') })
    //                 .catch(err => { console.log(err) });
    //         }

    //         else if (shto_dhurues_gr_gjakut == "O+") {
    //             db.execute("INSERT INTO depozita (Opozitiv) values(" + shto_dhurues_sasia + "); ")
    //                 .then(() => { res.render('shto_dhurues') })
    //                 .catch(err => { console.log(err) });
    //         }

    //         else { res.render('shto_dhurues'); }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
});

exports.route = router; 