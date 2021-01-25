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
        if (mousePressedOver(difficultyButton)) {
            if (difficulty === "off" && clicked === false) {
                clicked = true;
                difficultyButton.changeImage("on");
                difficulty = "on";
                setTimeout(() => {
                    clicked = false
                }, 100);
            } else if (difficulty === "on" && clicked === false) {
                clicked = true;
                difficultyButton.changeImage("off");
                difficulty = "off";
                setTimeout(() => {
                    clicked = false
                }, 100);
            }
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