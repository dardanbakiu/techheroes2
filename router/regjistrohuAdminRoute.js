const express = require('express');
const router = express.Router();
const Nurse = require('../model/Nurse')
const adminAuthMiddleware = require('../middleware/adminAuthMiddleWare');


router.get('/adminRegister', (req, res) => {
    res.render('regjistrohu_si_administrator');
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
            res.redirect('/adminRegister')
        }
        else {
            console.log(`Ky nurse nuk egziston`)
            Nurse.create({
                emri: emri,
                emriSpitalit:emriSpitalit,
                lokacioniSpitalit: lokacioni,
                email: email,
                password: password
            })
                .then(() => {
                    res.redirect('/kycu_admin');
                })
                .catch(err => {
                    res.redirect('/')
                });
        }
    }).catch(err => {
        console.log(err)
    })
})

exports.route = router;