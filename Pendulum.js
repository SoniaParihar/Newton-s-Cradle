class Pendulum{
    constructor(x,y,colo){
        var options={
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
        }
        this.body=Bodies.rectangle(x,y,40,40,options);
        this.x=x;
        this.y=y;
        this.color=color;
        World.add(myworld,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        noStroke();
        fill(this.color);
        ellipse(0,0,60,60);
        pop();
    }
}