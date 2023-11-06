function handlimg(flag){
    var img = document.getElementById("carImg")
    console.log("img", img.src)
    img.src = "./car2.JFIF"



    if (flag === "in") {
        img.src = "./car2.JFIF"
        img.style.borderRadius = "50%"
        //img.style.transition = "all 0.6s ease"

    } else {
        img.src = "./download.jfif"
        img.style.borderRadius = "0"
       // img.style.transition = "all 0.6s ease"

    }

}