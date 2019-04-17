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
        if(this.x + this.r >= width || this.x - this.r <= 0) this.xVel *= -1;
        if(this.y + this.r >= height || this.y - this.r <= 0) this.yVel *= -1;
    }
}

let bubbles = [];
// let bubble1;
// let bubble2;
// let bubble3;

function setup() {
    createCanvas(600, 400);
    noStroke();

    ellipseMode(RADIUS)

    for(let i = 0; i <= 10; i++){
        bubbles[i] = new Bubble(random(0, width),random(0, height),random(2,50));
    }
    // bubbles[0] = (new Bubble(200, 50, 60))
    // bubbles[1] = (new Bubble(30, 40, 50))
}

function draw() {
    background(0,50);

    for(let i = 0; i < bubbles.length; ++i){
        bubbles[i].display();
        bubbles[i].move();
        bubbles[i].check();
    }

    // for(let i = 0; i < bubbles.length; ++i){
    //     bubbles[2].display();
    //     bubbles[2].move();
    //     bubbles[2].check();

        

}
