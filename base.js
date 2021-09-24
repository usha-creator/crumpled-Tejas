class BaseClass {
    constructor(x, y, width, height) {

        var options = {
            isStatic : true,
            'restitution' : 1,
            'friction' : 0.4,
            'density' : 1
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        
        World.add(world, this.body);

    } display() {

        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}