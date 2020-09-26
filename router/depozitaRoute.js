const express = require('express');
const router = express.Router();
const db = require("../model/database");

// const User = require("../models/users");

router.get('/depozita', (req, res) => {
     db.query("select * from deposits", (err, rows, fields) => {
          if (err) throw err

          var AnegativElementet = 0;
          var ApozitivElementet = 0;
          var BpozitivElementet = 0;
          var BnegativElementet = 0;
          var ABpozitivElementet = 0;
          var ABnegativElementet = 0;
          var OpozitivElementet = 0;
          var OnegativElementet = 0;

          for (i = 0; i < rows.length; i++) {

               AnegativElementet += rows[i].Anegativ;
               ApozitivElementet += rows[i].Apozitiv;
               BpozitivElementet += rows[i].Bpozitiv;
               BnegativElementet += rows[i].Bnegativ;
               ABpozitivElementet += rows[i].ABpozitiv;
               ABnegativElementet += rows[i].ABnegativ;
               OpozitivElementet += rows[i].Opozitiv;
               OnegativElementet += rows[i].Onegativ;

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
     });

});



// });

exports.route = router;