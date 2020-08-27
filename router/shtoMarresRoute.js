const express = require('express');
const router = express.Router();
const db = require('../database');


router.get('/shto_marres', (req, res) => {
    res.render('shto_marres');
});

router.post('/shto_marres_form', (req, res) => {
    //shto antarin te databaza per listen e marresve, fshije sasin e gjakut te depozita
    const body = req.body;
    const marres_emri = body.marres_emri;
    const marres_mbiemri = body.marres_mbiemri;
    const marres_gr_gjakut = body.marres_gr_gjakut;
    const marres_sasia = body.marres_sasia;

    db.execute("INSERT INTO shtomarres (emri,mbiemri,grgjakut,sasia) values('" + marres_emri + "','" + marres_mbiemri + "','" + marres_gr_gjakut + "','" + marres_sasia + "');")
        .then(() => {
            if (marres_gr_gjakut == "A-") {
                db.execute("INSERT INTO depozita (Anegativ) values(" + (-1 * marres_sasia) + ")")
                    .then(res.render("shto_marres"))
                    .catch(err => { console.log(err); });
            }
            else if (marres_gr_gjakut == "A+") {
                db.execute("INSERT INTO depozita (Apozitiv) values(" + (-1 * marres_sasia) + ")")
                    .then(res.render("shto_marres"))
                    .catch(err => { console.log(err); });
            }

            else if (marres_gr_gjakut == "B+") {
                db.execute("INSERT INTO depozita (Bpozitiv) values(" + (-1 * marres_sasia) + ")")
                    .then(res.render("shto_marres"))
                    .catch(err => { console.log(err); });
            }

            else if (marres_gr_gjakut == "B-") {
                db.execute("INSERT INTO depozita (Bnegativ) values(" + (-1 * marres_sasia) + ")")
                    .then(res.render("shto_marres"))
                    .catch(err => { console.log(err); });
            }

            else if (marres_gr_gjakut == "AB+") {
                db.execute("INSERT INTO depozita (ABpozitiv) values(" + (-1 * marres_sasia) + ")")
                    .then(res.render("shto_marres"))
                    .catch(err => { console.log(err); });
            }

            else if (marres_gr_gjakut == "AB-") {
                db.execute("INSERT INTO depozita (ABnegativ) values(" + (-1 * marres_sasia) + ")")
                    .then(res.render("shto_marres"))
                    .catch(err => { console.log(err); });
            }

            else if (marres_gr_gjakut == "O+") {
                db.execute("INSERT INTO depozita (Opozitiv) values(" + (-1 * marres_sasia) + ")")
                    .then(res.render("shto_marres"))
                    .catch(err => { console.log(err); });
            }

            else if (marres_gr_gjakut == "O-") {
                db.execute("INSERT INTO depozita (Onegativ) values(" + (-1 * marres_sasia) + ")")
                    .then(res.render("shto_marres"))
                    .catch(err => { console.log(err); });
            }

            else { res.render("shto_marres") }


            res.render("shto_marres")
        })
        .catch(err => { res.render("shto_marres") });

});

exports.route = router; 