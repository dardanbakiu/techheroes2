const express = require('express');
const router = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMiddleWare')

router.get('/profili_dhuruesit',userAuthMiddleware, (req, res) => {
    res.render('profili_dhuruesit', {
        historia : global.tokenProfile.historia,
        emri : global.tokenProfile.emri,
        mbiemri : global.tokenProfile.mbiemri,
        kontakti : global.tokenProfile.kontakti,
        grgjakut : global.tokenProfile.grgjakut
    });
});

exports.route = router;