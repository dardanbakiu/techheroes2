const express = require('express');
const router = express.Router();
const db = require("../model/database");

const Donors = require('../model/Donors')
const Deposits = require('../model/Deposits')
const nurseAuthMiddleware = require('../middleware/nurseAuthMiddleWare');

router.get('/shto_dhurues', nurseAuthMiddleware, (req, res) => {

    Donors.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
        .then(donor => {
            res.render('shto_dhurues', { isAdded: " ", rows: donor.rows, totalRows: donor.count })
        })
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
                    Anegativ: shto_dhurues_sasia,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (shto_dhurues_gr_gjakut == "A+") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: shto_dhurues_sasia,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (shto_dhurues_gr_gjakut == "B+") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: shto_dhurues_sasia,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (shto_dhurues_gr_gjakut == "B-") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: shto_dhurues_sasia,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (shto_dhurues_gr_gjakut == "AB+") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: shto_dhurues_sasia,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (shto_dhurues_gr_gjakut == "AB-") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: shto_dhurues_sasia,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (shto_dhurues_gr_gjakut == "O-") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: shto_dhurues_sasia
                })
            }

            if (shto_dhurues_gr_gjakut == "O+") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: shto_dhurues_sasia,
                    Onegativ: 0
                })
            }
        })
        .then(() => {
            Donors.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                .then(donor => {
                    res.render('shto_dhurues', { isAdded: " ", rows: donor.rows, totalRows: donor.count })
                })
        })
        .catch(err => console.log(err))
});

exports.route = router;

