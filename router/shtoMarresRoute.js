const express = require('express');
const router = express.Router();
const db = require("../model/database");
const Receivers = require('../model/Receivers')
const Deposits = require('../model/Deposits')

router.get('/shto_marres', (req, res) => {
    res.render('shto_marres');
});

router.post('/shto_marres_form', (req, res) => {
    //shto antarin te databaza per listen e marresve, fshije sasin e gjakut te depozita
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
                    Anegativ: minusSasia
                })
            }

            if (marres_gr_gjakut == "A+") {
                Deposits.create({
                    Apozitiv: minusSasia
                })
            }

            if (marres_gr_gjakut == "B+") {
                Deposits.create({
                    Bpozitiv: minusSasia
                })
            }

            if (marres_gr_gjakut == "B-") {
                Deposits.create({
                    Bnegativ: minusSasia
                })
            }

            if (marres_gr_gjakut == "AB+") {
                Deposits.create({
                    ABpozitiv: minusSasia
                })
            }

            if (marres_gr_gjakut == "AB-") {
                Deposits.create({
                    ABnegativ: minusSasia
                })
            }

            if (marres_gr_gjakut == "O-") {
                Deposits.create({
                    Onegativ: minusSasia
                })
            }

            if (marres_gr_gjakut == "O+") {
                Deposits.create({
                    Opozitiv: minusSasia
                })
            }
        })
        .then(() => {
            res.redirect('/shto_marres')
        })
        .catch(err => console.log(err))

    // db.execute("INSERT INTO shtomarres (emri,mbiemri,grgjakut,sasia) values('" + marres_emri + "','" + marres_mbiemri + "','" + marres_gr_gjakut + "','" + marres_sasia + "');")
    //     .then(() => {
    //         if (marres_gr_gjakut == "A-") {
    //             db.execute("INSERT INTO depozita (Anegativ) values(" + (-1 * marres_sasia) + ")")
    //                 .then(res.render("shto_marres"))
    //                 .catch(err => { console.log(err); });
    //         }
    //         else if (marres_gr_gjakut == "A+") {
    //             db.execute("INSERT INTO depozita (Apozitiv) values(" + (-1 * marres_sasia) + ")")
    //                 .then(res.render("shto_marres"))
    //                 .catch(err => { console.log(err); });
    //         }

    //         else if (marres_gr_gjakut == "B+") {
    //             db.execute("INSERT INTO depozita (Bpozitiv) values(" + (-1 * marres_sasia) + ")")
    //                 .then(res.render("shto_marres"))
    //                 .catch(err => { console.log(err); });
    //         }

    //         else if (marres_gr_gjakut == "B-") {
    //             db.execute("INSERT INTO depozita (Bnegativ) values(" + (-1 * marres_sasia) + ")")
    //                 .then(res.render("shto_marres"))
    //                 .catch(err => { console.log(err); });
    //         }

    //         else if (marres_gr_gjakut == "AB+") {
    //             db.execute("INSERT INTO depozita (ABpozitiv) values(" + (-1 * marres_sasia) + ")")
    //                 .then(res.render("shto_marres"))
    //                 .catch(err => { console.log(err); });
    //         }

    //         else if (marres_gr_gjakut == "AB-") {
    //             db.execute("INSERT INTO depozita (ABnegativ) values(" + (-1 * marres_sasia) + ")")
    //                 .then(res.render("shto_marres"))
    //                 .catch(err => { console.log(err); });
    //         }

    //         else if (marres_gr_gjakut == "O+") {
    //             db.execute("INSERT INTO depozita (Opozitiv) values(" + (-1 * marres_sasia) + ")")
    //                 .then(res.render("shto_marres"))
    //                 .catch(err => { console.log(err); });
    //         }

    //         else if (marres_gr_gjakut == "O-") {
    //             db.execute("INSERT INTO depozita (Onegativ) values(" + (-1 * marres_sasia) + ")")
    //                 .then(res.render("shto_marres"))
    //                 .catch(err => { console.log(err); });
    //         }

    //         else { res.render("shto_marres") }


    //         res.render("shto_marres")
    //     })
    //     .catch(err => { res.render("shto_marres") });

});

exports.route = router; 