class Bubble extends createjs.Container
{
    constructor(room) {
        super();
        var length = 10 + RoomsAnimator.randomize(50);
        var habbo = RoomsAnimator.randomize(room.habbos.length - 1);

        var bubbleColor = room.habbos[habbo][0][3][1];
        var bubbleFilter = new createjs.ColorFilter(1, 1, 1, 1, bubbleColor.r, bubbleColor.g, bubbleColor.b, 0);

        var left = new createjs.Bitmap(Animation.loader.getResult("bubble-left"));
        left.filters = [bubbleFilter];
        left.cache(0, 0, left.image.width, left.image.height)
        this.addChild(left);
        
        for (var i = 0; i < (length / 2); i++) {
            var middle = new createjs.Bitmap(Animation.loader.getResult("bubble-middle"));
            middle.filters = [bubbleFilter];
            middle.cache(0, 0, middle.image.width, middle.image.height)
            middle.x = 2 + i * 2;
            this.addChild(middle);
        }

        var right = new createjs.Bitmap(Animation.loader.getResult("bubble-right"));
        right.filters = [bubbleFilter];
        right.cache(0, 0, right.image.width, right.image.height)
        right.x = length + 2;
        this.addChild(right);

        for (var i = 0; i < (length / 2); i++) {
            if (Math.random() > 0.1 && i > 1) {
                var miniText = new createjs.Bitmap(Animation.loader.getResult("bubble-minitext"));
                miniText.x = i * 2;
                miniText.y = 2;
                this.addChild(miniText);
            }
        }

        room.bubbles.push(this);

        this.x = RoomsAnimator.findLocation(room.habbos[habbo][1])[0] - Math.round(length / 2) + 4;
        this.y = -30;
        
        if (room.bubbles.length > 5) {
            room.removeFirstBubble();
        }
        
        if (room.bubbles.length > 1) {
            for (var i = room.bubbles.length - 2; i >= 0; i--) {
                room.bubbles[i].y = room.bubbles[i].y - 6;
            }
        }
    }
} 