const express = require("express");
const router = express.Router();
const fs = require("fs");


router.get("/get1", (req, res) => {
    res.send("got ire");
})

router.post("/getBounce", (req, res) => {
    var { height, restiturion } = req.body;
    console.log(req.body)
    if (restiturion < 0 || restiturion > 1) {
        return res.status(400).json({ InCorrect: "The value entered is incorrect please check" })
    }
    var g = 9.8;
    var time = 0;
    var timeStep = 0.01;
    var maxHeight = height;
    var lastTime = -Math.sqrt((2 * height) / g);
    var maxVelocity = -Math.sqrt(2 * maxHeight * g)
    var bounce = 0;
    var h = height;
    var velocity = 0;
    var freeFall = true;

    var x = [];
    var y = [];
    var temp = 0;
    while (maxHeight > 0.01) {
        if (freeFall) {
            temp = h + (velocity * timeStep) - (0.5 * g * Math.pow(timeStep, 2));
            if (temp < 0) {
                bounce++;
                time = lastTime + (2 * Math.sqrt((2 * maxHeight / g)))
                freeFall = false
                h = 0.0;
            } else {
                time = (time + timeStep);
                velocity = (velocity) - (g * timeStep);
                h = temp;

            }

        } else {
            time = (time + 0.01);
            maxVelocity = maxVelocity * restiturion;
            velocity = maxVelocity;
            freeFall = true;
            h = 0.0;
            maxHeight = (maxVelocity * maxVelocity) / (2 * g);

        }
        y.push(h);
        x.push(time);
        //console.log(maxHeight);

    }

    var resData = {
        heightAxis: y,
        timeAxis: x,
        bounce
    }


    res.json(resData);
    var dataJson = JSON.stringify(resData);
    fs.writeFileSync("./oldDataJson/data.json", dataJson);
})

module.exports = router;