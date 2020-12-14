const express = require('express');
const app = express();
const path = require('path');
const ballinaRoute = require('./router/ballinaRoute');
const depozitaRoute = require('./router/depozitaRoute');
const listaDhuruesveRoute = require('./router/listaDhuruesveRoute');
const listaMarrsveRoute = require('./router/listaMarresveRoute');
const profiliDhuruesitRoute = require('./router/profiliDhuruesitRoute');
const regjistrohuAdminRoute = require('./router/regjistrohuAdminRoute');
const regjistrohuDhuruesRoute = require('./router/regjistrohuDhuruesRoute');
const kyquInfermierRoute = require('./router/kyquInfermierRoute');
const kyquDhuruesRoute = require('./router/kyquDhuruesRoute');
const shtoDhuruesRoute = require('./router/shtoDhuruesRoute');
const shtoMarresRoute = require('./router/shtoMarresRoute');
const admin = require('./router/admin')
const db = require("./model/database");
const sequelize = require('./model/db') // db connection with sequelize
const session = require('express-session')
const Sequelize = require("sequelize"); // Sequelize package
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require('dotenv').config()


const mySessionStore = new SequelizeStore({ //ktu esht errori qe spo na len mu logu me t'paren
    db: sequelize
})

app.use('/', express.static('static'));
app.set('view engine', 'ejs');
app.set('views', 'views');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// db.execute('Select * from users')
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// });



app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // expires: new Date(Date.now() + (5*1000))
    cookie: { maxAge: 30 * 60 * 1000 },
    store: mySessionStore,
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.

}))

app.get('/dil', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/')
    })
})

app.use('/', admin.route)
app.use('/', ballinaRoute.route);
app.use('/', depozitaRoute.route);
app.use('/', listaDhuruesveRoute.route);
app.use('/', listaMarrsveRoute.route);
app.use('/', profiliDhuruesitRoute.route);
app.use('/', regjistrohuAdminRoute.route);
app.use('/', regjistrohuDhuruesRoute.route);
app.use('/', kyquInfermierRoute.route);
app.use('/', kyquDhuruesRoute.route);
app.use('/', shtoDhuruesRoute.route);
app.use('/', shtoMarresRoute.route);


const port = 3000
sequelize.sync()
    .then(result => {
        app.listen(port)
    })
    .catch(err => console.log(err))