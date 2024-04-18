class Loader extends createjs.Bitmap {
    constructor() {
        super(Animation.loader.getResult("loader-1"));        
        
        this.frame = 1;

        this.x = 174;
        this.y = 181;

        Animation.stage.addChild(this);
    }

    update() {
        this.frame++;

        if (this.frame == 5) {
            this.frame = 1;
        }

        this.image = Animation.loader.getResult("loader-" + this.frame);
    }
}