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
        if (shto_dhurues_gr_gjakut == "A-") {
            Deposits.create({
                Anegativ: minusSasia,
                Apozitiv: 0,
                Bpozitiv: 0,
                Bnegativ: 0,
                ABnegativ: 0,
                ABpozitiv: 0,
                Opozitiv: 0,    
                Onegativ:0
            })
        }

        if (shto_dhurues_gr_gjakut == "A+") {
            Deposits.create({
                Anegativ: 0,
                Apozitiv: minusSasia,
                Bpozitiv: 0,
                Bnegativ: 0,
                ABnegativ: 0,
                ABpozitiv: 0,
                Opozitiv: 0,    
                Onegativ:0
            })
        }

        if (shto_dhurues_gr_gjakut == "B+") {
            Deposits.create({
                Anegativ: 0,
                Apozitiv: 0,
                Bpozitiv: minusSasia,
                Bnegativ: 0,
                ABnegativ: 0,
                ABpozitiv: 0,
                Opozitiv: 0,    
                Onegativ:0
            })
        }

        if (shto_dhurues_gr_gjakut == "B-") {
            Deposits.create({
                Anegativ: 0,
                Apozitiv: 0,
                Bpozitiv: 0,
                Bnegativ: minusSasia,
                ABnegativ: 0,
                ABpozitiv: 0,
                Opozitiv: 0,    
                Onegativ:0
            })
        }

        if (shto_dhurues_gr_gjakut == "AB+") {
            Deposits.create({
                Anegativ: 0,
                Apozitiv: 0,
                Bpozitiv: 0,
                Bnegativ: 0,
                ABnegativ: 0,
                ABpozitiv: minusSasia,
                Opozitiv: 0,    
                Onegativ:0
            })
        }

        if (shto_dhurues_gr_gjakut == "AB-") {
            Deposits.create({
                Anegativ: 0,
                Apozitiv: 0,
                Bpozitiv: 0,
                Bnegativ: 0,
                ABnegativ: minusSasia,
                ABpozitiv: 0,
                Opozitiv: 0,    
                Onegativ:0
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
                Onegativ:minusSasia
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
                Opozitiv: minusSasia,    
                Onegativ:0
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