// var now = new date()
// console.log(now)


 //var now = new Date().getMonth()  //0 to 11  0 jan && 11 dec
// var now = new Date().getDate()   //1 to 31
// var now = new Date().getDay()     //0 to 6   0 sunday
// var now = new Date().getFullYear()     //2023
// var now = new Date().getHours()     //0 to 23   0 min-night to 23 11 pm
// var now = new Date().getMinutes()     // 0 to 59
// var now = new Date().getSeconds()     //0 to 59
// var now = new Date().getMilliseconds()     //0 to 999
// var now = new Date().getTime()     //1 jan 1970 rat 12 bajy sy abhi tk return krta hai miliSec

// console.log(now, "now")



// var oldDate = new Date("mar 15 2013")
// var now = new Date()

// console.log(oldDate, "now")
// console.log(now, "now")


var nowMiliSec = now.getTime()
var oldMiliSec = oldDate.getTime()

var diffMiliSec = nowMiliSec - oldMiliSec

console.log(diffMiliSec)

var diffYear = Math.round(diffMiliSec / (1000 * 60 * 60 * 24 * 365))
console.log(diffYear)
