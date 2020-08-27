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
const kyquAdminRoute = require('./router/kyquAdminRoute');
const kyquDhuruesRoute = require('./router/kyquDhuruesRoute');
const shtoDhuruesRoute = require('./router/shtoDhuruesRoute');
const shtoMarresRoute = require('./router/shtoMarresRoute');
const db = require("./database");


app.use('/', express.static('static'));
app.set('view engine', 'ejs');
app.set('views', 'views');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// db.execute('Select * from users')
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// });

global.admin = {
    username: "admin",
    password: "admin",
    logged: false
}

global.tokenProfile = {
    logged:false,
    emri : "",
    mbiemri : "",
    kontakti : "",
    grgjakut : "",
    historia: ""
};

global.dhurues = false;

app.use('/', ballinaRoute.route);
app.use('/', depozitaRoute.route);
app.use('/', listaDhuruesveRoute.route);
app.use('/', listaMarrsveRoute.route);
app.use('/', profiliDhuruesitRoute.route);
app.use('/', regjistrohuAdminRoute.route);
app.use('/', regjistrohuDhuruesRoute.route);
app.use('/', kyquAdminRoute.route);
app.use('/', kyquDhuruesRoute.route);
app.use('/', shtoDhuruesRoute.route);
app.use('/', shtoMarresRoute.route);


app.listen(3000);   