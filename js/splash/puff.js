class Puff extends createjs.Bitmap {
    constructor() {
        super();

        this.image = Animation.loader.getResult("puff-1");
        this.frame = 1;
        this.done = false;
    }

    update() {
        if (this.frame < 7) {
            this.frame++;
        }

        if (this.frame < 7) {
            this.image = Animation.loader.getResult("puff-" + this.frame);
        }
        else {
            this.done = true;
        }
    }
}