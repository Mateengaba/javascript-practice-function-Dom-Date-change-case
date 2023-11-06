
// Example1

// function greetUser() {
// console.log("HELLO WORLD")
// ...

// Example2

// function fullName(firstName, lastName) {

//     return firstName + " " + lastName

// }

// var userName = fullName("Jaffar", "Aman")
// console.log(userName)


// Example3


// function getValue() {
//     var input = document.getElementById("userName")
//     console.log(input.value)
// }

// function setValue() {
//     var input = document.getElementById("userName")
//     input.value = "jaffar aman"
// }


// Example4


// function fullFilledCity() {
//         var zipInput = document.getElementById("zipInput")
//         var cityName = ""
    
//         if (zipInput.value == "") {
//             return
//         }
//         console.log("hello world", zipInput.value)
    
//         if (zipInput.value == 123) {
//             cityName = "karachi"
//         } else if (zipInput.value == 456) {
//             cityName = "lahore"
    
//         } else if (zipInput.value == 789) {
//             cityName = "Islamabad"
    
//         }
    
//         console.log(cityName)
//         var cityInput = document.getElementById("cityInput")
//         cityInput.value = cityName
    
//     }





// function getPara() {
//     var para = document.getElementById("para")
//     console.log(para.innerText)
// }

// function setPara() {
//     var txt = "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser"
//     var para = document.getElementById("para")
//     para.innerHTML += txt
// }


// <!-- Example5 pic show - notshow -->

// function hideImg() {
// var carImg = document.getElementById("carImg")
// console.log("carImg" , carImg.className)
// carImg.className = " notshow"
// }

// function showImg(){
//     var carImg = document.getElementById("carImg")
//     console.log("carImg" , carImg.className)
// carImg.className = " show"
// }

// Example6



// var bulbImg = document.getElementById("bulbImg")   //global use

// function bulbOn() {
// console.log("bulbon" , bulbImg.src)
// bulbImg.src = "./assets/bolbon.jpg"

// }


// function bulbOff() {

//     console.log("bulb Off")
//     bulbImg.src = "./assets/bulboff.png"
//     }