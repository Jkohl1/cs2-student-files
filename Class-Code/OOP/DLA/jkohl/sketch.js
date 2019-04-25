//Jacob Kohl
//DLA
//April 25, 2018

/* A brief description of what the program is */

let walkers = []; 
let static = [];
let newStatic;

function setup() {
    createCanvas(400, 400);

    for(let i = 0; i < 100; i++){
        walkers.push(new Walker(random(width), random(height)));
    }

    let seed = new Walker(width/2, height/2);
    seed.static = true;
    static.push(seed);
}

function draw() {
    background(3, 0, 3);

    for (let w of walkers){
        w.show();
        w.move();
        for(let s of static){
            w.checkCollision(s)
        }
    }

    newStatic = walkers.filter(w => w.static);
    walkers = walkers.filter(w => !w.static);

    for(eachNew of newStatic) static.push(eachNew);

    for(s of static){
        s.show();
    }
}

class Walker{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = random(2,8);
        this.static = false;
    }

    move(){
        this.x += random(-3,3);
        this.y += random(-3,3);

        if(this.x < 0) this.x = 0;
        if(this.y < 0) this.y = 0;

        if(this.x > width) this.x = width;
        if(this.y > height) this.y = height;
    }

    show(){
        if(this.static){
            fill(150, 234, 12); 
        } else {
            fill(234, 12, 231)
        }
            
    
        noStroke();
        ellipse(this.x, this.y, this.r)
    }

    checkCollision(staticWalker){
        let d = dist(this.x, this.y, staticWalker.x, staticWalker.y);
        let sumOfRadii = this.r + staticWalker.r;

        if(d <= sumOfRadii){
            this.static = true;
        }
    }
}
