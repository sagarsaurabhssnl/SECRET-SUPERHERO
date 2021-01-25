//FUNCTION TO BE EXECUTED AT GAMESTATE PLAY
function gamestateplay() {
    if (gamestate === "play") {
        gameover.visible = false;
        difficultyButton.visible = false;
        fire();
        playermovement();
        zombiespawn();
        zombiedown();
        peopledown();
        peopleSpawn();
        coinSpawn();
        gameend();
        push();
        fill(150);
        rect(camera.position.x - 100, camera.position.y - 300, 200, 20);
        pop();
        fill("red");
        rect(camera.position.x - 100, camera.position.y - 300, health, 20);
    }
}