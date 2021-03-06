class Block {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.1
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width; 
        this.height = height;
        World.add(world, this.body); 

        this.visibility = 255; 
    }

    display() {
        if (this.body.speed < 3) {
            push(); 
            rotate(this.body.angle);
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height); 
            pop();
        }
        else {
            World.remove(world, this.body); 
            this.visibility = this.visibility - 5; 
            tint(255, this.visibility); 
            rectMode(CENTER); 
            rect(0, 0, this.width, this.height); 
        }  
    }

    score() {
        if(this.visibility < 0 && this.visibility >= 105) {
            score++; 
        }
    }
}