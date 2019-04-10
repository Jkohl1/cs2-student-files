//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */


class Bubble {
    constructor(_x, _y, _r) {
        this.x = _x;
        this.y = _y;
        this.r = _r;
    }
    display(){
        fill(200);
        ellipse(this.x, this.y, this.r)
    }
    move(){
        this.x += random(-width / 100, width / 100);
        this.y += random(-height / 100, height / 100);
    }
    check(){
        if(x + r >= width || x - r <= 0) xVel *= -1;
        if(y + r >= height || y - r <= 0) yVel *= -1;
    }
}

let bubbles = new Array(2);

function setup() {
    createCanvas(600, 400);
    noStroke();

    ellipseMode(RADIUS)
}

function draw() {
    background(0,50);

    for(let i = 0; i < bubbles.length; ++i){
        bubbles[i].appear();
        bubbles[i].move();
        bubbles[i].check();
    }

}
