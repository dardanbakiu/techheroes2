const express = require('express');
const router = express.Router();
const db = require("../model/database");
const Receivers = require('../model/Receivers')
const Deposits = require('../model/Deposits')
const nurseAuthMiddleware = require('../middleware/nurseAuthMiddleWare');

router.get('/shto_marres', nurseAuthMiddleware, (req, res) => {
    Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
        .then(receiver => {
            res.render('shto_marres', { isAdded: " ", rows: receiver.rows, totalRows: receiver.count })
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
            // qetu duhet me bo kushtin qe nese asht depozita < 0 ateher sbon me marr gjak

            Deposits.findAll()
                .then(rows => {

                    let AnegativElementet = 0;
                    let ApozitivElementet = 0;
                    let BpozitivElementet = 0;
                    let BnegativElementet = 0;
                    let ABpozitivElementet = 0;
                    let ABnegativElementet = 0;
                    let OpozitivElementet = 0;
                    let OnegativElementet = 0;

                    for (i = 0; i < rows.length; i++) {
                        AnegativElementet += parseInt(rows[i].Anegativ);
                        ApozitivElementet += parseInt(rows[i].Apozitiv);
                        BpozitivElementet += parseInt(rows[i].Bpozitiv);
                        BnegativElementet += parseInt(rows[i].Bnegativ);
                        ABpozitivElementet += parseInt(rows[i].ABpozitiv);
                        ABnegativElementet += parseInt(rows[i].ABnegativ);
                        OpozitivElementet += parseInt(rows[i].Opozitiv);
                        OnegativElementet += parseInt(rows[i].Onegativ);

                    }

                    if (marres_gr_gjakut == "A-") {
                        if (AnegativElementet > marres_sasia) {
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

                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Sasia u hoq nga databaza", rows: receiver.rows, totalRows: receiver.count })
                                })
                        }
                        else {
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Nuk ka mjaftueshem sasi te gjakut te grupit A-", rows: receiver.rows, totalRows: receiver.count })
                                    return
                                })

                        }
                    }

                    if (marres_gr_gjakut == "A+") {
                        if (ApozitivElementet > marres_sasia) {
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
                            Receivers.findAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Sasia u hoq nga databaza", rows: receiver.rows, totalRows: receiver.count })
                                })
                        }
                        else {
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Nuk ka mjaftueshem sasi te gjakut te grupit A+", rows: receiver.rows, totalRows: receiver.count })
                                    return
                                })
                        }

                    }

                    if (marres_gr_gjakut == "B+") {
                        if (BpozitivElementet > marres_sasia) {
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
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Sasia u hoq nga databaza", rows: receiver.rows, totalRows: receiver.count })
                                })
                        }
                        else {
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Nuk ka mjaftueshem sasi te gjakut te grupit B+", rows: receiver.rows, totalRows: receiver.count })
                                    return
                                })
                        }

                    }

                    if (marres_gr_gjakut == "B-") {
                        if (BnegativElementet > marres_sasia) {
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
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Sasia u hoq nga databaza", rows: receiver.rows, totalRows: receiver.count })
                                })
                        } else {
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Nuk ka mjaftueshem sasi te gjakut te grupit B-", rows: receiver.rows, totalRows: receiver.count })
                                    return
                                })
                        }

                    }

                    if (marres_gr_gjakut == "AB+") {
                        if (ABpozitivElementet > marres_sasia) {
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
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Sasia u hoq nga databaza", rows: receiver.rows, totalRows: receiver.count })
                                })
                        } else {
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Nuk ka mjaftueshem sasi te gjakut te grupit AB+", rows: receiver.rows, totalRows: receiver.count })
                                    return
                                })
                        }
                    }

                    if (marres_gr_gjakut == "AB-") {
                        if (ABnegativElementet > marres_sasia) {
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
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Sasia u hoq nga databaza", rows: receiver.rows, totalRows: receiver.count })
                                })
                        } else {
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Nuk ka mjaftueshem sasi te gjakut te grupit AB-", rows: receiver.rows, totalRows: receiver.count })
                                    return
                                })
                        }
                    }

                    if (marres_gr_gjakut == "O-") {
                        if (OnegativElementet > marres_sasia) {
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
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Sasia u hoq nga databaza", rows: receiver.rows, totalRows: receiver.count })
                                })
                        } else {
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Nuk ka mjaftueshem sasi te gjakut te grupit 0-", rows: receiver.rows, totalRows: receiver.count })
                                    return
                                })
                        }
                    }

                    if (marres_gr_gjakut == "O+") {
                        if (OpozitivElementet > marres_sasia) {
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
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Sasia u hoq nga databaza", rows: receiver.rows, totalRows: receiver.count })
                                })
                        } else {
                            Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                                .then(receiver => {
                                    res.render('shto_marres', { isAdded: "Nuk ka mjaftueshem sasi te gjakut te grupit 0+", rows: receiver.rows, totalRows: receiver.count })
                                    return
                                })
                        }
                    }
                })
                // .then(() => {
                // Receivers.findAndCountAll({ limit: 5, order: [['updatedAt', 'DESC']] })
                //     .then(receiver => {
                //         res.render('shto_marres', { isAdded: " ", rows: receiver.rows, totalRows: receiver.count })
                //     })
                // })
                .catch(err => console.log(err))
            //ketu perfundon kushti
        })

});

exports.route = router; 