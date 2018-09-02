var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "name"
    ], [
        req.body.name
    ], function(result) {
        res.json({result});
    });
});

module.exports = router;