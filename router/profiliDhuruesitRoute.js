const express = require('express');
const router = express.Router();

router.get('/profili_dhuruesit', (req, res) => {
    res.render('profili_dhuruesit', {
        historia : global.tokenProfile.historia,
        emri : global.tokenProfile.emri,
        mbiemri : global.tokenProfile.mbiemri,
        kontakti : global.tokenProfile.kontakti,
        grgjakut : global.tokenProfile.grgjakut
    });
});

exports.route = router;