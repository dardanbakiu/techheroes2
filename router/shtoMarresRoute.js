const express = require('express');
const router = express.Router();
const db = require("../model/database");
const Receivers = require('../model/Receivers')
const Deposits = require('../model/Deposits')
const nurseAuthMiddleware = require('../middleware/nurseAuthMiddleWare');

router.get('/shto_marres', nurseAuthMiddleware, (req, res) => {
    Receivers.findAll()
        .then(receiver => {
            res.render('shto_marres', { isAdded: " ", rows: receiver });
        })

});

router.post('/shto_marres_form', (req, res) => {

    const { marres_emri,
        marres_mbiemri,
        marres_gr_gjakut,
        marres_sasia } = req.body;

    const minusSasia = -1 * marres_sasia

    Receivers.create({
        emri: marres_emri,
        mbiemri: marres_mbiemri,
        grgjakut: marres_gr_gjakut,
        sasia: marres_sasia
    })
        .then(() => {
            if (marres_gr_gjakut == "A-") {
                Deposits.create({
                    Anegativ: minusSasia,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (marres_gr_gjakut == "A+") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: minusSasia,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (marres_gr_gjakut == "B+") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: minusSasia,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (marres_gr_gjakut == "B-") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: minusSasia,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (marres_gr_gjakut == "AB+") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: minusSasia,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (marres_gr_gjakut == "AB-") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: minusSasia,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: 0
                })
            }

            if (marres_gr_gjakut == "O-") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: 0,
                    Onegativ: minusSasia
                })
            }

            if (marres_gr_gjakut == "O+") {
                Deposits.create({
                    Anegativ: 0,
                    Apozitiv: 0,
                    Bpozitiv: 0,
                    Bnegativ: 0,
                    ABnegativ: 0,
                    ABpozitiv: 0,
                    Opozitiv: minusSasia,
                    Onegativ: 0
                })
            }
        })
        .then(() => {
            Receivers.findAll()
                .then(receiver => {
                    res.render('shto_marres', { isAdded: "U shtua me sukses", rows: receiver });
                })
        })
        .catch(err => console.log(err))
});

exports.route = router; 