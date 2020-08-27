const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    global.tokenProfile.historia = "";
                        global.tokenProfile.emri= "";
                        global.tokenProfile.mbiemri= "";
                        global.tokenProfile.kontakti = "";
                        global.tokenProfile.grgjakut ="";
                        res.render('dhurogjak_shpetojete');
    res.render('dhurogjak_shpetojete');
});

exports.route = router;