document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        let dino = document.getElementById("dino");
        if (!dino.classList.contains("jump")) {
            dino.classList.add("jump");
            setTimeout(function() {
                dino.classList.remove("jump");
            }, 500);
        }
    }
});

let obstacle = document.getElementById("obstacle");
let dino = document.getElementById("dino");

function moveObstacle() {
    let pos = 600;
    let interval = setInterval(function() {
        pos -= 5;
        obstacle.style.left = pos + "px";
        if (pos < -30) {
            pos = 600;
        }

        let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

        if (obstacleLeft < 50 && obstacleLeft > 0 && dinoBottom <= 30) {
            alert("game over!");
            clearInterval(interval);
            location.reload();
        }
    }, 20);
}

moveObstacle();
