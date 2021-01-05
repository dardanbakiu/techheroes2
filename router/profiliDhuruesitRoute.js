const express = require('express');
const router = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMiddleWare');
const User = require('../model/User')
const Donor = require('../model/Donors')
const Sequelize = require('sequelize');
const { connect } = require('mongoose');


router.get('/profili_dhuruesit/:uuid', userAuthMiddleware, (req, res) => {
    const uuidParameter = req.params.uuid
    User.findOne({
        where: {
            uuid: uuidParameter
        }
    })
        .then(user => {
            // const { email,emri, mbiemri, kontakti, grgjakut } = user.dataValues
            // console.log(`TIPI : ${typeof user.dataValues.email}`)

            const email = user.dataValues.email
            const emri = user.dataValues.emri
            const mbiemri = user.dataValues.mbiemri
            const kontakti = user.dataValues.kontakti
            const grgjakut = user.dataValues.grgjakut

            console.log(`USER : ${email} ${emri} ${mbiemri} ${kontakti} ${grgjakut}`)

            Donor.findAll({
                where: {
                    email: email
                }
            }).then(result => {
                let sasia = null
                result.forEach(element => {
                    console.log(`sasia : ${element.sasia}`)
                    sasia += element.sasia
                });

                console.log(`Sasia totale : ${sasia}`)
                // let { sasia } = result.dataValues
                if (!sasia) {
                    sasia = 0
                }
                res.render('profili_dhuruesit', {
                    emri: emri,
                    mbiemri: mbiemri,
                    kontakti: kontakti,
                    grgjakut: grgjakut,
                    sasia: sasia
                });
            }).catch(err => {
                res.render('profili_dhuruesit', {
                    emri: emri,
                    mbiemri: mbiemri,
                    kontakti: kontakti,
                    grgjakut: grgjakut,
                    sasia: 0
                });
            })

        })
        .catch(err => {
            console.log(err)
            res.redirect('/kycu_dhurues')
        })
});

exports.route = router;