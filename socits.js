var router = module.exports = require('express').Router();
var login  = require('./login');

var db = new (require('locallydb'))('./.data');
var socits = db.collection('socits');

router.route('/api/socits')
    .all(login.required)
    .get(function (req, res) {
        res.json(socits.toArray());
    })
    .post(function (req, res) {
        var socit = req.body;
        socit.userId = req.user.cid;

        // TO BE REMOVED
        socit.username = req.user.username;
        socit.fullname = req.user.fullname;
        socit.email    = req.user.email;

        var id = socits.insert(socit);
        res.json(socits.get(id));
    });
