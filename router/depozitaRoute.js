const express = require('express');
const router = express.Router();
const db = require("../model/database");
const Deposits = require('../model/Deposits')

// const User = require("../models/users");

router.get('/depozita', (req, res) => {
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


     // db.query("select * from deposits", (err, rows, fields) => {
     //      if (err) throw err

     //      let AnegativElementet = 0;
     //      let ApozitivElementet = 0;
     //      let BpozitivElementet = 0;
     //      let BnegativElementet = 0;
     //      let ABpozitivElementet = 0;
     //      let ABnegativElementet = 0;
     //      let OpozitivElementet = 0;
     //      let OnegativElementet = 0;

     //      for (i = 0; i < rows.length; i++) {

     //           AnegativElementet += rows[i].Anegativ;
     //           ApozitivElementet += rows[i].Apozitiv;
     //           BpozitivElementet += rows[i].Bpozitiv;
     //           BnegativElementet += rows[i].Bnegativ;
     //           ABpozitivElementet += rows[i].ABpozitiv;
     //           ABnegativElementet += rows[i].ABnegativ;
     //           OpozitivElementet += rows[i].Opozitiv;
     //           OnegativElementet += rows[i].Onegativ;

     //      }
     //      res.render("depozita", {
     //           Anegativ: AnegativElementet,
     //           Apozitiv: ApozitivElementet,
     //           Bpozitiv: BpozitivElementet,
     //           Bnegativ: BnegativElementet,
     //           ABnegativ: ABnegativElementet,
     //           ABpozitiv: ABpozitivElementet,
     //           Onegativ: OnegativElementet,
     //           Opozitiv: OpozitivElementet
     //      });
     // });

});



// });

exports.route = router;