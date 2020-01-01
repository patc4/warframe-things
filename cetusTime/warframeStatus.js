var https = require("https")
var {Notification} = require("electron")

var day = -1

dayNotify()
setInterval(dayNotify, 60000)

function dayNotify() {
    https.get("https://api.warframestat.us/pc/cetusCycle", function (data) {
        data.setEncoding("utf8")
        data.on("data", function (d) {
            if (JSON.parse(d).state == "day" && day == 0 || day == -1) {
                new Notification({title: "Cetus Time", body: "The sun has risen on the plains. Go kick some Grineer ass."}).show()
                day = 1
            }else if (JSON.parse(d).state == "night" && day == 1 || day == -1) {
                new Notification({title: "Cetus Time", body: "The sun has set on the plains. Now it's time for the Eidolons to roam free."}).show()
                day = 0
            }
        })
    })
}