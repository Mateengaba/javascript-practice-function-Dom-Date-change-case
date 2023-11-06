
//1

//Array
// var arr = ["karachi", 2023, 19, 5]

// [] = > array bracket

//Object

// city: "karachi", === >property
// city = > property name
// "karachi" = > property value

// var obj = {
//     // key : value
//     city: "karachi",
//     year: 2023,
//     date: 19,
//     month: 5
// }


// console.log("obj", obj.city)

// console.log("obj", obj)


//2

//Array
// var arr = [ 2023, 19, 5 ,"karachi"]



// var cityObj = {
//     currentYear: 2023,
//     city: "karachi",
//     currentDate: 19,
//     currentMonth: 5,
//     isStatus: true,
//     population: undefined,
// }

// console.log(cityObj["city"])


// console.log("obj", cityObj.city) //Dot notation
// console.log("obj", cityObj["currentMonth"]) //Array notation




//3

// loop


// for (let index = 0; index < array.length; index++) {
//         const element = array[index];
    
//     }


    // for in loop


    // for (var key in cityObj) {
    //     console.log(key, cityObj[key])
    // }
    
    
    // // for in loop
    // for (var key in cityObj) {
    //     // console.log(key, cityObj.key)
    // }
    
    
    // var arr = [2023, 19, 5, "karachi"]
    // arr[4] = "hello"
    
    
    // cityObj.greet = "Hello Karachi"
    // cityObj.population = "1 billon"
    
    
    // delete property
    
    // var del = delete cityObj.isStatus
    // console.log("del", del)
    // console.log("cityObj", cityObj)



    //4

//05 variable ki jagha 1 object me sari value save karwa deta hai..    

// var fNStd1 = "Jaffar"
// var lNStd1 = "Aman"
// var stdAge1 = 22
// var stdGender1 = "male"
// var stdDob1 = "9/feb/2001"


// var stdArr = ["Jaffar", "Aman", 22, "male", "9/feb/2001"]

// var std1 = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     age: 22,
//     gender: "male",
//      dob: "9/feb/2001", // feb 9 2001
// }

// std1.dob = "feb 9 2001"    // value replace karna ka lia...

// delete std1.age    // value delete karna ka lia..

// std1.age = "34"    // new value aad karna ka lia..

// console.log(std1)

//for in loop

// for (var key in std1) {
//      console.log(key, std1[key])
//     }



    //5

    // var std1 = {
    //         firstName: "Jaffar",
    //         lastName: "Aman",
    //         age: 22,
    //         gender: "male",
    //         dob: "9/feb/2001", // feb 9 2001
    //         subjects: ["HTML", "CSS", "JAVASCRIPT"]
    //     }
        
        
    //     // //check prop
    //     var checkProp = "subjects" in std1      // key check karta hai is object ke under ya key hai ya nahi..
        
    //     console.log(checkProp)
    //     console.log(std1.subjects[1])



    //6

    // var std1 = {
    //     firstName: "Mateen",
    //     lastName: "Gaba",
    //     // age: 22,
    //     gender: "male",
    //     dob: "9/feb/1998", // feb 9 2001
    //     subjects: ["HTML", "CSS", "JAVASCRIPT"],
    //     getFullName: function () {
    //         var fullName = this.firstName + " " + this.lastName
    //         return fullName
    //     },
    
    //     getAge: function (dob) {
    //         var dobMiliSec = new Date(dob).getTime()
    //         var currentMilSec = new Date().getTime()
    //         var diffMiliSec = currentMilSec - dobMiliSec
    //         var age = Math.floor(diffMiliSec / (1000 * 60 * 60 * 24 * 365))
    //         return age
    //     },
    
    
    // }
    
    // var std1FullName = std1.getFullName()
    // var std1Age = std1.getAge("aug 16 1988")
    

    // console.log(std1Age)
    // console.log(std1FullName)



    //7




    var std1 = {
        id : 101,
        firstName : "Mateen",
        lastName : "Gaba",
        section: "Section A",
        course: "Web & mobile App development",
        subjects : [{
            name : "HTML",
             marks : 80,
    },
    {
        name : "CSS",
        marks : 80,
},

{
    name : "javascript_A",
    marks : 80,


},

{
    name : "javascript_B",
    marks : 80,
},

],

getTotalMark: function () {
            console.log(this.subjects[0].marks)
            var totalMarks = this.subjects[0].marks + this.subjects[1].marks + this.subjects[2].marks
            console.log(totalMarks)
        //     var totalMarks = 0;
        //     for (var i = 0; i < this.subjects.length; i++) {
        //         totalMarks += this.subjects[i].mark
        //     }
           return totalMarks
        // }
    }

    }
var totalMarks = std1.getTotalMark()

 //console.log(totalMarks, "totalMarks")
