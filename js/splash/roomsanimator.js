class RoomsAnimator {
    constructor() {
        this.rooms = [];
        this.numberOfUpdates = 0;
        this.previousLane = 0;
        
        this.bgContainer = new createjs.Shape();
        
        var bgPattern = new createjs.Bitmap(Animation.loader.getResult("bg-pattern"));
        this.bgContainer.graphics.beginBitmapFill(bgPattern.image).drawRect(0, 0, 500, 500);
        
        Animation.stage.addChild(this.bgContainer);
        Animation.stage.update();
    }

    update() {
        this.bgContainer.x += 2;
        this.bgContainer.y -= 1;
        
        if (this.bgContainer.x >= 0) {
            this.bgContainer.x = -60;
            this.bgContainer.y = 0;
        }

        if (this.numberOfUpdates > 8 + Math.random() * 6)
        {
            var room = new Room((this.previousLane + 2) % 9);

            Animation.stage.addChild(room);
            this.rooms.push(room);

            this.previousLane = room.lane;
            this.numberOfUpdates = 0;
        }
        else
        {
            this.numberOfUpdates++;
        }

        for (var i = 0; i < this.rooms.length; i++) {
            this.rooms[i].update();
            
            if (this.rooms[i].x > 396 || this.rooms[i].y < -50) {
                Animation.stage.removeChild(this.rooms[i]);
                this.rooms.splice(i, 1);
            }
        }
    }

    getRoomAndRandomHabboLocation() {
        var index = Math.round(this.rooms.length / 2);
        var room = this.rooms[index];
        var habbo = room.getRandomHabboLocation();
        return ([room, habbo]);
    }

    static findLocation(position) {
        var location = [position[0] * 8 + position[1] * 8, -position[0] * 4 + position[1] * 4];
        return location;
    }

    static randomize(max) {
        return (Math.round(Math.random() * max));
    } 
}