var electron = require("electron")
var lodash = require("lodash")
var https = require("https")

var data = ""

https.get("https://api.warframe.market/v1/items/heavy_caliber/statistics", {headers: {"platform": "pc", "Language": "en"}}, function (res) {
    res.setEncoding("utf8")
    res.on("data", function (d) {
        data += d
    })
    res.on("end", function () {
        lodash.forEach(JSON.parse(data).payload.statistics_live["48hours"], function (value) {
            if (value.order_type == "sell" && value.mod_rank == 0) {
                console.log(value.datetime + " - " + value.avg_price)
            }
        })
    })
})