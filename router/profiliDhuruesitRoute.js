const express = require('express');
const router = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMiddleWare')

router.get('/profili_dhuruesit/:email',userAuthMiddleware, (req, res) => {
    const emailParameter = req.params.email
    res.render('profili_dhuruesit', {
        
    });
});

exports.route = router;