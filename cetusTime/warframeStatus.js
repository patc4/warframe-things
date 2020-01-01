var https = require("https")
var notifier = require("node-notifier")

var day = -1

console.log("1")
dayNotify()
setInterval(dayNotify, 60000)

function dayNotify() {
    console.log("2")
    https.get("https://api.warframestat.us/pc/cetusCycle", function (data) {
        data.setEncoding("utf8")
        data.on("data", function (d) {
            if (JSON.parse(d).state == "day" && day == 0 || day == -1) {
                notifier.notify({"message": "the sun has risen on the plains."})
                day = 1
            }else if (JSON.parse(d).state == "night" && day == 1 || day == -1) {
                notifier.notify({"message": "the eidolons are roaming the plain"})
                day = 0
            }
            console.log("3")
        })
    })
}