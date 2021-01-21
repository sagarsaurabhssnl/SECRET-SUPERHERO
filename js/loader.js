var loaderCanvas = document.getElementById("Timer");
var cont = loaderCanvas.getContext("2d");
var loader = setInterval(repeat, 1);

function repeat() {
    cont.fillStyle = "grey";
    cont.fillRect(0, 10, 300, 80);
    cont.fillStyle = "red";
    cont.fillRect(0, 10, length, 80);
}