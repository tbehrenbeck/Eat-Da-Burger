var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var item = require("../models/items.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  item.all(function(data) {
    var hbsObject = {
      items: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/items", function(req, res) {
  item.create(["name"], [req.body.name], function(result) {
    // Send back the ID of the new quote
    console.log(result);
    res.json({ id: result.insertId });
  });
});

router.put("/api/items/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  item.update(
    {
      need: req.body.need
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/items/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  item.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
