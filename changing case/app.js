// var userCity = prompt("Enter youu city").toLowerCase();

// var cities = ["karaChi", "lahore", "multan", "islamabad"]
// var isMatch = false

// for (var i = 0; i < cities.length; i++) {
//     if (cities[i].toLowerCase() === userCity) {
//         isMatch = true
//         console.log("WELCOME")
//         break
//     }
// }

// if (isMatch === false) {
//     console.log("YOUR CITY IS NOT FOUND")
// }

// console.log("hello".toUpperCase())



// var str = "HELLO WORLD";  //STRING

// console.log(str.length)
// console.log(str.slice(-5))

// object base
var str = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."

for (var i =0; i < str.length; i++){
    if (str.slice(i, i + 11) === "programming") {

        console.log(i)
        str = str.slice(0,i) + "object base" + str.slice (i+11)
    }
}

document.write(str)