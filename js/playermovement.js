//MOVING PLAYER ALONG WITH THE ARROW CONTROLS
function playermovement() {
    player.pause();
    if (keyDown(UP_ARROW) && player.y > 444) {
        player.y = player.y - 5;
        player.play();
    }
    if (keyDown(DOWN_ARROW) && player.y < 1100) {
        player.y = player.y + 5;
        player.play();
    }
    if (keyDown(RIGHT_ARROW) && player.x < 2049) {
        player.x = player.x + 5;
        player.play();
    }
    if (keyDown(LEFT_ARROW) && player.x > 685) {
        player.x = player.x - 5;
        player.play();
    }
}