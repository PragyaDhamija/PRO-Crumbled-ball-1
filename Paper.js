class Paper{
    constructor(x,y,){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.,
            density : 1.2
        }
        this.trash = Bodies.circle(x,y,25,options);
        World.add(world,this.trash);
    }

    display() {
        var pos = this.trash.position
        var angle = this.trash.angle

        push()
        translate(pos.x,pos.y);
        rotate(angle)
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke("red")
        fill("orange");
        ellipse(0, 0, 25, 25);
        pop()
    }
}