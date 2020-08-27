const express = require('express');
const router = express.Router();

router.get('/kycu_admin', (req, res) => {
    res.render('kycu_si_administrator');
});

router.post('/kycu_admin_btn', (req, res) => {
    const body = req.body;

    const username = body.kycu_admin_username;
    const password = body.kycu_admin_password;

    // console.log(username + " " + password);
    if ((username == global.admin.username) && (password == global.admin.password)) {
        console.log(global.admin.password);
        global.admin.logged = true;

        console.log(global.admin.logged);
        console.log(username);
    }
    else {
        global.admin.logged = false;
        console.log(global.admin.logged);
        console.log(password);
    }

    res.render('dhurogjak_shpetojete');
});

router.post('/dil', (req, res) => {
    global.admin.logged = false;
    global.dhurues = false;
    res.render('dhurogjak_shpetojete');
});


exports.route = router;
