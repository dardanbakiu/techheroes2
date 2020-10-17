const express = require('express');
const router = express.Router();

const adminAuthMiddleware = require('../middleware/adminAuthMiddleWare');


router.get('/adminRegister',adminAuthMiddleware, (req, res) => {
    res.render('regjistrohu_si_administrator');
});

router.post("/test", (req, res) => {

    res.render("dhurogjak_shpetojete");
})

exports.route = router;