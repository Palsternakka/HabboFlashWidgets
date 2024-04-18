class Furni extends createjs.Bitmap {
    constructor(furni, location, flipped) {
        super(Animation.loader.getResult(furni[0]));

        var scaleX = 1;
        var offsetX = 0;

        if (flipped) {
            scaleX = -1;
            offsetX = 16;
        }

        var finalLocation = RoomsAnimator.findLocation(location);
        
        this.regX = -Animation.offsets[furni[0]].x;
        this.regY = -Animation.offsets[furni[0]].y;
        this.x = finalLocation[0] + offsetX;
        this.y = finalLocation[1];
        this.scaleX = scaleX;

        if (furni[2]) {
            var furniFilter = new createjs.ColorFilter(1, 1, 1, 1, -Math.random() * 150, -Math.random() * 150, -Math.random() * 150, 0);
            this.filters = [furniFilter];
            this.cache(0, 0, this.image.width, this.image.height);
        }
    }
}