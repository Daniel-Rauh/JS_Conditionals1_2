function weather() {
    let quality = document.getElementById("weather").value
    if ((quality >= 8) && (quality <= 10)) {
        document.getElementById("output").innerHTML = "Super"
        document.getElementById("hero").style.backgroundColor = "gold"
    } else if ((quality >= 6) && (quality <= 8)) {
        document.getElementById("output").innerHTML = "Gut"
        document.getElementById("hero").style.backgroundColor = "lawngreen"
    } else if ((quality >= 3) && (quality <= 6)) {
        document.getElementById("output").innerHTML = "Okay"
        document.getElementById("hero").style.backgroundColor = "cyan"
    } else if ((quality >= 0) && (quality <= 3)) {
        document.getElementById("output").innerHTML = "Schlecht"
        document.getElementById("hero").style.backgroundColor = "#666"
    } else {
        document.getElementById("output").innerHTML = "Between 0 and 10 ..."
        document.getElementById("hero").style.backgroundColor = "red"
    }
}