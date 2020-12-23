const express = require('express');
const router = express.Router();
const db = require("../model/database");
const Deposits = require('../model/Deposits')
const nurseAuthMiddleware = require('../middleware/nurseAuthMiddleWare');

// const User = require("../models/users");

router.get('/depozita',nurseAuthMiddleware, (req, res) => {
     Deposits.findAll()
        .then(rows => {

          let AnegativElementet = 0;
          let ApozitivElementet = 0;
          let BpozitivElementet = 0;
          let BnegativElementet = 0;
          let ABpozitivElementet = 0;
          let ABnegativElementet = 0;
          let OpozitivElementet = 0;
          let OnegativElementet = 0;

          for (i = 0; i < rows.length; i++) {
               AnegativElementet += parseInt(rows[i].Anegativ);
               ApozitivElementet += parseInt(rows[i].Apozitiv);
               BpozitivElementet += parseInt(rows[i].Bpozitiv);
               BnegativElementet += parseInt(rows[i].Bnegativ);
               ABpozitivElementet += parseInt(rows[i].ABpozitiv);
               ABnegativElementet += parseInt(rows[i].ABnegativ);
               OpozitivElementet += parseInt(rows[i].Opozitiv);
               OnegativElementet += parseInt(rows[i].Onegativ);

          }
          res.render("depozita", {
               Anegativ: AnegativElementet,
               Apozitiv: ApozitivElementet,
               Bpozitiv: BpozitivElementet,
               Bnegativ: BnegativElementet,
               ABnegativ: ABnegativElementet,
               ABpozitiv: ABpozitivElementet,
               Onegativ: OnegativElementet,
               Opozitiv: OpozitivElementet
          });
        })

});

exports.route = router;