//MOVING PLAYER ALONG WITH THE ARROW CONTROLS
function playermovement() {
    player.pause();
    if (keyDown(UP_ARROW) && player.y > displayHeight / 2) {
        player.y = player.y - 5;
        player.play();
    }
    if (keyDown(DOWN_ARROW) && player.y < (displayHeight * 2) - (displayHeight / 2)) {
        player.y = player.y + 5;
        player.play();
    }
    if (keyDown(RIGHT_ARROW) && player.x < (displayWidth * 2) - (displayWidth / 2)) {
        player.x = player.x + 5;
        player.play();
    }
    if (keyDown(LEFT_ARROW) && player.x > displayWidth / 2) {
        player.x = player.x - 5;
        player.play();
    }
}