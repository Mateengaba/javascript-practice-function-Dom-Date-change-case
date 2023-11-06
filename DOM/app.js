
//1

// var h1Element = document.childNodes[1].childNodes[2].childNodes[3];   //[  text  ]= Junk Artifacts leka ata hai.

// h1Element.style.backgroundColor = "blue"

// console.log(h1Element)


// //2

// var a = document.children[0].children[1].children[1]; 

//  a.style.backgroundColor = "green"


// console.log(a)


//3



// var parents = document.getElementById("parents")
// var childElements = parents.children

//var childElements = parents.children[2]    //1
//childElements.style.backgroundColor = "yellow"    //1



// for (var i = 0; i < childElements.length; i++) {
//     console.log(childElements[i])
//     childElements[i].style.background = "blue"
// }



//console.log(childElements)



//4


// var parents = document.getElementById("parents")
// var childElements = parents.children



// var fChild = parents.firstElementChild
// console.log(fChild)

// var lstChild = parents.lastElementChild
// console.log(lstChild)
// fChild.style.backgroundColor = "red"
// lstChild.style.backgroundColor = "blue"



//5


// console.log(parent.firstElementChild.nextElementSibling.nextElementSibling)
// console.log(parent.lastElementChild.previousElementSibling)
// console.log(parent.firstElementChild.previousElementSibling)





//6


// console.log("document", document.childNodes[1].childNodes)
// console.log("document", document.childNodes[1].children)


// var a = document.childNodes[1].children[1].children[3].children[3]

// console.log(a)
// a.style.backgroundColor = "red"


//7


//var parent = document.getElementById("parent")
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)


// var parent = document.getElementById("parent")


// var childOne = parent.firstElementChild
// console.log("1st", childOne)
// var childLast = parent.lastElementChild
// console.log("2nd", childLast)

// console.log("3rd", childOne.nextElementSibling)

// var a = childLast.previousElementSibling
// console.log("4th", a)


// var para = document.getElementById("para")

// console.log(para.childNodes)




//8


// console.log(document.childNodes[1].childNodes[1].nodeType)
// console.log(document.childNodes[1].childNodes[0].nodeType)


// var parent = document.getElementById("parent")
// console.log("Elementname:", parent.nodeName)
// console.log("Element 1htmi:", parent.nodeType)
// console.log("ElementValue:", parent.nodeValue)



// var para = document.getElementById("para")
// console.log("Elementname:" ,para.nodeName)
// console.log("Element 1html:",para.nodeType)
// console.log("ElementValue:", para.nodeValue)


// var list = document.getElementById("list")
// console.log(list.children.length)
// console.log("Element 1html:",list.nodeType)




//9

// function getInput(){
// var input = document.getElementById("input")

// console.log(input)

// // input.className = "bgBlue"    //class set karna ka lia

// input.setAttribute("class", "bgBlue")    // class set karna ka lia

// console.log(input.attributes)     // attributes maloom karna ka lia. kitna attributes hai.

// console.log(input.getAttribute("placeholder"))    // attributes ki value get karne ka lia. kha is ka under kia hai.
// console.log(input.hasAttribute("class"))      // attributes maloom karne ka lia kha ya is element ma hai ya nahi.
// input.removeAttribute("placeholder")         //  attributes remove kar na ka lia.
// console.log(input)


// }



//10

// var parent = document.getElementById("parent")
// console.log(parent)

// var h1Element = document.createElement("h1")     // new element creat karna ka lia.
// console.log(h1Element)

// var h1Txt = document.createTextNode("HEADING 1")    // new text creat karna ka lia.
// console.log(h1Txt)

// h1Element.appendChild(h1Txt)      // appendChild element ka under text ya kohi or sheez aad karna ka lia.

// //console.log(h1Element)

//  h1Element.setAttribute("onclick", "foo()")     // is ka bad kohi bhi attributes set kar sakta hai 1 by 1.
//   h1Element.setAttribute("id", "foo")            // is ka bad kohi bhi attributes set kar sakta hai 1 by 1.
//   h1Element.setAttribute("class", "bgBlue")        // is ka bad kohi bhi attributes set kar sakta hai 1 by 1.


// //   parent.appendChild(h1Element)
