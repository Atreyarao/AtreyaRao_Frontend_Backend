const express = require("express");
const router = express.Router();
const fs = require("fs");



router.get("/prevValue", (req, res) => {
    var data = fs.readFileSync("./oldDataJson/data.json");
    res.json(JSON.parse(data));
})


module.exports = router;