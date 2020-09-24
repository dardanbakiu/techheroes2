const express = require('express');
const router = express.Router();
const db = require("../model/database");

router.get('/shto_dhurues', (req, res) => {
    res.render('shto_dhurues');
});

router.post('/shto_dhurues_form', (req, res) => {
    const body = req.body;

    const shto_dhurues_emri = body.shto_dhurues_emri;
    const shto_dhurues_mbiemri = body.shto_dhurues_mbiemri;
    const shto_dhurues_email = body.shto_dhurues_email;
    const shto_dhurues_gr_gjakut = body.shto_dhurues_gr_gjakut;
    const shto_dhurues_kontakti = body.shto_dhurues_kontakti;
    const shto_dhurues_sasia = body.shto_dhurues_sasia;

    console.log(shto_dhurues_mbiemri);

    db.execute("INSERT INTO shtodhurues (emri,mbiemri,email,grgjakut,kontakti,sasia) values('" + shto_dhurues_emri + "','" + shto_dhurues_mbiemri + "','" + shto_dhurues_email + "','" + shto_dhurues_gr_gjakut + "','" + shto_dhurues_kontakti + "','" + shto_dhurues_sasia + "'); ")
        .then(() => {
            if (shto_dhurues_gr_gjakut == "A-") {
                db.execute("INSERT INTO depozita (Anegativ) values(" + shto_dhurues_sasia + "); ")
                    .then(() => { res.render('shto_dhurues') })
                    .catch(err => { console.log(err) });
            }

            else if (shto_dhurues_gr_gjakut == "A+") {
                db.execute("INSERT INTO depozita (Apozitiv) values(" + shto_dhurues_sasia + "); ")
                    .then(() => { res.render('shto_dhurues') })
                    .catch(err => { console.log(err) });
            }

            else if (shto_dhurues_gr_gjakut == "B-") {
                db.execute("INSERT INTO depozita (Bnegativ) values(" + shto_dhurues_sasia + "); ")
                    .then(() => { res.render('shto_dhurues') })
                    .catch(err => { console.log(err) });
            }

            else if (shto_dhurues_gr_gjakut == "B+") {
                db.execute("INSERT INTO depozita (Bpozitiv) values(" + shto_dhurues_sasia + "); ")
                    .then(() => { res.render('shto_dhurues') })
                    .catch(err => { console.log(err) });
            }

            else if (shto_dhurues_gr_gjakut == "AB+") {
                db.execute("INSERT INTO depozita (ABpozitiv) values(" + shto_dhurues_sasia + "); ")
                    .then(() => { res.render('shto_dhurues') })
                    .catch(err => { console.log(err) });
            }
            else if (shto_dhurues_gr_gjakut == "AB-") {
                db.execute("INSERT INTO depozita (ABnegativ) values(" + shto_dhurues_sasia + "); ")
                    .then(() => { res.render('shto_dhurues') })
                    .catch(err => { console.log(err) });
            }

            else if (shto_dhurues_gr_gjakut == "O-") {
                db.execute("INSERT INTO depozita (Onegativ) values(" + shto_dhurues_sasia + "); ")
                    .then(() => { res.render('shto_dhurues') })
                    .catch(err => { console.log(err) });
            }

            else if (shto_dhurues_gr_gjakut == "O+") {
                db.execute("INSERT INTO depozita (Opozitiv) values(" + shto_dhurues_sasia + "); ")
                    .then(() => { res.render('shto_dhurues') })
                    .catch(err => { console.log(err) });
            }

            else { res.render('shto_dhurues'); }
        })
        .catch(err => {
            console.log(err);
        });
});

exports.route = router; 