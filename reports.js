const express = require("express")
const open = require("open")

const app = express()

app.use(express.static('./dist'))

app.listen(8890)

open(`http://localhost:8890/report.html`)
