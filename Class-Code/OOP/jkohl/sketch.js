//Jacob Kohl
//OOP
//April 10, 2019

/* A brief description of what the program is */

let bubble;

function setup() {
    createCanvas(200, 200);
    bubble = {
        x: width / 2,
        y: height / 2,
        hello: function () {
            console.log("hello")
        },
        show: function () {
            noFill();
            stroke(255);
            strokeWeight(4);
            ellipse(this.x, this.y, 50)
        },
        move: function (maxMove) {
            this.x += random(-maxMove, maxMove);
            this.y += random(-maxMove, maxMove);
        }
    }
    //bubble.hello();
}

function draw() {
    background(0);
    bubble.move(1);
    bubble.show();

}

// function moveBubble(maxMovement) {
//     bubble.x += random(-maxMovement, maxMovement);
//     bubble.y += random(-maxMovement, maxMovement);
// }

// function displayBubble() {
//     stroke(255);
//     strokeWeight(4);
//     noFill();
//     ellipse(bubble.x, bubble.y, 50);
// }