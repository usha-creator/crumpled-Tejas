class Paper extends BaseClass {
    constructor(x, y, width, height) {

        super(x,y,width,height);
        Body.setStatic(this.body, false);

        this.image = loadImage("paper.png");

    } display() {
       
        super.display();

    }
}
