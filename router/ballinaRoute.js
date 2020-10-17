const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('dhurogjak_shpetojete');
});

exports.route = router;