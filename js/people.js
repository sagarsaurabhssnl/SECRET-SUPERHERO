function peopleSpawn() {
    if (frameCount % 10 === 0) {
        people = createSprite(random(zombiex), Math.round(random(444, 1218)));
        if (people.x < 800) {
            people.velocityX = 3;
        } else if (people.x > 1800) {
            people.velocityX = -3;
            people.mirrorX(-1);
        }
        people.scale = 0.4;
        people.debug = false;
        peoples.add(people);
        var peopleImage = Math.round(random(1, 7));
        // people.addAnimation("1people",pimg1);
        switch (peopleImage) {
            case 1: people.addAnimation("1people", pimg1);
                people.setCollider("rectangle", 0, 0, 60, 250);
                break;
            case 2: people.addAnimation("2people", pimg2);
                people.setCollider("rectangle", 0, 0, 80, 330);
                break;
            case 3: people.addAnimation("3people", pimg3);
                people.setCollider("rectangle", 0, 0, 80, 250);
                break;
            case 4: people.addAnimation("4people", pimg4);
                people.setCollider("rectangle", 0, 0, 80, 280);
                break;
            case 5: people.addAnimation("5people", pimg5);
                people.setCollider("rectangle", 0, 5, 80, 370);
                break;
            case 6: people.addAnimation("6people", pimg6);
                people.setCollider("rectangle", 0, 0, 50, 200);
                break;
            case 7: people.addAnimation("7people", pimg7);
                people.setCollider("rectangle", 0, -30, 80, 275);
                break;
            default: break;
        }
    }
}

function peopledown() {
    for (var pd = 1; pd < bg.length; pd++) {
        if (bg[pd].isTouching(peoples)) {
            bg[pd].destroyEach();
            health -= 10;
        }
    }
}