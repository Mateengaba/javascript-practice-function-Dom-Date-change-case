// page URL gat karna ka lia.  
// window.location.href          

//URL set karna ka lia/ ak page se dusra page pa jane ka lia. 

//     window.location.href = "https://www.google.com"

//(absulot URL change nahi hota)  (relative URL Changable ho/ change ho sak ta hai.)


var nameinputv = document.getElementById("nameInput")

function goToAbout(){
    var location = window.location.href   // get karna ka lia
//    console.log(location)

if(!nameinputv.value){
    alert("Enter your name")
    return
}

   window.location.href = "./about.html"

}

//...

function goContact(){
    var location = window.location.href   // get karna ka lia
//    console.log(location)

if(!nameinputv.value){
    alert("Enter your name")
    return
}

//    window.location.href = "./Contact.html"

//    window.location.assign("./Contact.html")

   window.location.replace("./Contact.html")    // url replace kar deta hai. back page pa nahi jata.

}


function goGoogle(){
        //anchor target work with Javascrip
    // window.open("https://www.google.com")

    // new popup open karwa na ka lia.
    window.open("https://www.google.com" , "win1", "height=300 , width=400 , left=50% , top=40%")


}