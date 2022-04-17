
function time()

{

    var hours = document.getElementById("hours")
    var minutes = document.getElementById("minutes")
    var seconds = document.getElementById("seconds")
    var ampm = document.getElementById("ampm")


    var time = new Date()

    var hrs = time.getHours()
    var mins = time.getMinutes()
    var secs = time.getSeconds()
    var am_pm = "AM"

    if (hrs == 0) {

        hrs = 12 //11:59AM -->00:00 _-->12:00
    }
    if (hrs > 12) {

        hrs = hrs - 12;
        am_pm = "PM"


    } //24 hrs format into 12hrs format

    if (hrs < 10) {

        hrs = "0" + hrs
    }
    if (mins < 10) {

        mins = "0" + mins
    }

    if (secs < 10) {

        secs = "0" + secs
    }

    hours.innerText = hrs
    minutes.innerText = mins
    seconds.innerText = secs
    ampm.innerText = am_pm

}

var oneseconds = 1000

setInterval(time, oneseconds)


function setTime() {


    var x = document.getElementById("morning").value
    var y = document.getElementById("afternoon").value
    var z = document.getElementById("evening").value

    var hourr = new Date().getHours();


    if (x == hourr) {


        document.getElementById("bigcontainer").innerText = "Good Morning"

        document.getElementById("smallcontainer").innerText = "Lets have some breakfast"


    }
    if (y == hourr) {


        document.getElementById("bigcontainer").innerText = "Good Afternoon"

        document.getElementById("smallcontainer").innerText = "lets have some lunch"


    }
    if (z == hourr) {

        document.getElementById("yo").innerText = "Good Evening"

        document.getElementById("yoo").innerText = "lets have some dinner"

    }

// raj()


}


// function raj(){
// let dummy=document.getElementById("morning")
// let value=dummy.options[dummy.selectedIndex].innerText
// document.getElementById("name").innerText="wakeuptie



// }
