const express = require('express');
const router = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMiddleWare');
const User = require('../model/User')
const Donor = require('../model/Donors')
const Sequelize = require('sequelize')

router.get('/profili_dhuruesit/:email', userAuthMiddleware, (req, res) => {
    const emailParameter = req.params.email
    User.findOne({
        where: {
            email: emailParameter
        }
    })
        .then(user => {
            const { email,emri, mbiemri, kontakti, grgjakut } = user.dataValues

            Donor.findOne({
                where: {
                    email: email
                }
            }).then(result => {
                let { sasia } = result.dataValues
                if(!sasia) {
                    sasia = 0
                }
                res.render('profili_dhuruesit',{
                    emri:emri,
                    mbiemri:mbiemri,
                    kontakti:kontakti,
                    grgjakut:grgjakut,
                    sasia:sasia
                });
            }).catch(err=>{
                res.render('profili_dhuruesit',{
                    emri:emri,
                    mbiemri:mbiemri,
                    kontakti:kontakti,
                    grgjakut:grgjakut,
                    sasia:0
                });
            })

        })
        .catch(err => {
            console.log(err)
            res.redirect('/kycu_dhurues')
        })
});

exports.route = router;