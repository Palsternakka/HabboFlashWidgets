class Habbo extends createjs.Container {
    constructor(index, direction, room) {
        super();

        this.index = index;

        var habboCoordinates = RoomsAnimator.findLocation(room.habbos[index][1]);
        var flipped = false;
        if (direction > 3 && direction != 7) {
            flipped = true;
            switch (direction) {
                case 4:
                    direction = 2;
                    break;
                case 5:
                    direction = 1;
                    break;
                case 6:
                    direction = 0;
                    break;
            }
        }

        if (!flipped) {
            this.x = habboCoordinates[0];
            this.y = habboCoordinates[1] - 24;
        }
        else {
            this.x = habboCoordinates[0] + 16;
            this.y = habboCoordinates[1] - 24;
            this.scaleX = -1;
        }

        var body = new createjs.Bitmap(Animation.loader.getResult("habbo-body-std-" + room.habbos[index][0][0][0] + "-2-0"));
        var bodyFilter = new createjs.ColorFilter(1, 1, 1, 1, -255 + room.habbos[index][0][0][1].r, -255 + room.habbos[index][0][0][1].g, -255 + room.habbos[index][0][0][1].b, 0);
        body.filters = [bodyFilter];
        body.cache(0, 0, body.image.width, body.image.height);
        this.addChild(body);
        
        var shoes = new createjs.Bitmap(Animation.loader.getResult("habbo-shoes-std-" + room.habbos[index][0][1][0] + "-2-0"));
        var shoesFilter = new createjs.ColorFilter(1, 1, 1, 1, -255 + room.habbos[index][0][1][1].r, -255 + room.habbos[index][0][1][1].g, -255 + room.habbos[index][0][1][1].b, 0);
        shoes.filters = [shoesFilter];
        shoes.cache(0, 0, shoes.image.width, shoes.image.height);
        this.addChild(shoes);
        
        var pants = new createjs.Bitmap(Animation.loader.getResult("habbo-pants-std-" + room.habbos[index][0][2][0] + "-2-0"));
        var pantsFilter = new createjs.ColorFilter(1, 1, 1, 1, -255 + room.habbos[index][0][2][1].r, -255 + room.habbos[index][0][2][1].g, -255 + room.habbos[index][0][2][1].b, 0);
        pants.filters = [pantsFilter];
        pants.cache(0, 0, pants.image.width, pants.image.height);
        this.addChild(pants);
        
        var shirt = new createjs.Bitmap(Animation.loader.getResult("habbo-shirt-std-" + room.habbos[index][0][3][0] + "-2-0"));
        var shirtFilter = new createjs.ColorFilter(1, 1, 1, 1, -255 + room.habbos[index][0][3][1].r, -255 + room.habbos[index][0][3][1].g, -255 + room.habbos[index][0][3][1].b, 0);
        shirt.filters = [shirtFilter];
        shirt.cache(0, 0, shirt.image.width, shirt.image.height);
        this.addChild(shirt);
        
        var hair = new createjs.Bitmap(Animation.loader.getResult("habbo-hair-std-" + room.habbos[index][0][4][0] + "-2-0"));
        if (hair.image) {
            var hairFilter = new createjs.ColorFilter(1, 1, 1, 1, -255 + room.habbos[index][0][4][1].r, -255 + room.habbos[index][0][4][1].g, -255 + room.habbos[index][0][4][1].b, 0);
            hair.filters = [hairFilter];
            hair.cache(0, 0, hair.image.width, hair.image.height);
        }
        this.addChild(hair);
    }
}