const express = require('express');
const router = express.Router();




router.get('/regjistrohu_si_administrator', (req, res) => {
    res.render('regjistrohu_si_administrator');
});

router.post("/test", (req, res) => {

    res.render("dhurogjak_shpetojete");
})

exports.route = router;