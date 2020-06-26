const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const Bounce = require("./routes/api/bounce");
const prev = require("./routes/api/getPrevious");
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use("/routes/api", Bounce);
app.use("/routes/api", prev);

app.get("/", (req, res) => {
    res.send("hello")
})
const port = 1234;

app.listen(port, () => {
    console.log(`Server up and running on port ${port}!`);
    //console.log(app)
});


