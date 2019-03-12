var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var sqlcon = require('./dbcon');

var request = new sqlcon.Request();

router.get('/call', function (req, res) {
    var query = "select * FROM [Leadmanagement].[dbo].[Headerdetails]";
    request.query(query,function(err,rows) {
            res.json(rows.recordset);
    })
});

router.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

module.exports = router;