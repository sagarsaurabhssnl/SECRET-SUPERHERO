function gamestatemainmenu() {
    if (gamestate === "mainmenu") {
        if (mousePressedOver(start)) {
            start.visible = false;
            infoHtml.visible = false;
            gamestate = "play";
            openFullscreen();
        }
        if (mousePressedOver(infoHtml)) {
            infoHtml.visible = false;
            homeButton.style.display = "block";
            info.style.display = "block";
            canvas.style.display = "none";
        }
    }
}

function returnHome() {
    infoHtml.visible = true;
    homeButton.style.display = "none";
    info.style.display = "none";
    canvas.style.display = "block";
}

function openFullscreen() {
    if (info.requestFullscreen) {
        info.requestFullscreen();
    } else if (info.webkitRequestFullscreen) {
        info.webkitRequestFullscreen();
    } else if (info.msRequestFullscreen) {
        info.msRequestFullscreen();
    }
}