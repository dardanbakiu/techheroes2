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
    if ((username == "admin") && (password == "admin")) {
        console.log("Admin is logged");
        req.session.AdminIsLoggedSession = username
        console.log(req.session.AdminIsLoggedSession)

        res.redirect(`/depozita`)
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
