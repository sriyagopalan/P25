class Paper{
    constructor(x, y, r){
        var options = {

            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
            isStatic : false,

        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        
    }
}