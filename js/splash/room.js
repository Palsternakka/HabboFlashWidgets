class Room extends createjs.Container {
    constructor(lane) {
        super();

        this.roomLayout = "miniroom" + (Math.floor(Math.random() * 4) + 1);
        this.tileData = this.populateTileData();
        this.habbos = [];
        this.bubbles = [];

        this.x = -350 + lane * 60;
        this.y = 250 + lane * 30;
        this.lane = lane;
        this.cache(-500, -500, 1000, 1000);

        var roomShadow = new createjs.Shadow("rgba(0,0,0,0.25)", (this.lane + 1) * 2.5, (this.lane + 1) * 5, 0);
        this.shadow = roomShadow;
        
        var floor = new createjs.Bitmap(Animation.loader.getResult(this.roomLayout + "-floor"));
        floor.regX = -Animation.offsets[this.roomLayout + "-floor"].x;
        floor.regY = -Animation.offsets[this.roomLayout + "-floor"].y;
        
        var floorColor = this.randomizeColors("room");
        var floorFilter = new createjs.ColorFilter(1, 1, 1, 1, -255 + floorColor.r, -255 + floorColor.g, -255 + floorColor.b, 0);
        floor.filters = [floorFilter];
        floor.cache(0, 0, floor.image.width, floor.image.height);
        
        var walls = new createjs.Bitmap(Animation.loader.getResult(this.roomLayout + "-walls"));
        walls.regX = -Animation.offsets[this.roomLayout + "-walls"].x;
        walls.regY = -Animation.offsets[this.roomLayout + "-walls"].y;
        
        var wallsColor = this.randomizeColors("room");
        var wallsFilter = new createjs.ColorFilter(1, 1, 1, 1, -255 + wallsColor.r, -255 + wallsColor.g, -255 + wallsColor.b, 0);
        walls.filters = [wallsFilter];
        walls.cache(0, 0, walls.image.width, walls.image.height);
        
        var door = new createjs.Bitmap(Animation.loader.getResult("miniroom-door"));
        door.regX = -Animation.offsets["miniroom-door"].x;
        door.regY = -Animation.offsets["miniroom-door"].y;
        
        this.addChild(walls);
        this.addChild(floor);
        this.addChild(door);
        
        for (var i = 0; i < this.tileData.length; i++) {
            if (Math.random() > 0.8) {
                for (var j = 0; j < this.tileData[i].length; j++) {
                    if (this.tileData[i][j] == "0" && i != 2) {
                        var tile = [i, j];
                        var randomPoster = this.randomizePoster();
                        var furni = new Furni(randomPoster, tile, false);
                        this.tileData[tile[0]][tile[1]] = "F";
                        this.addChild(furni);
        
                        break;
                    }
                }
            }
        }
        
        for (let i = 0; i < this.tileData[0].length; i++) {
            if (Math.random() > 0.8) {
                for (let j = 0; j < this.tileData.length; j++) {
                    if (this.tileData[this.tileData.length - j] && this.tileData[this.tileData.length - j][i] === "0") {
                        var tile = [this.tileData.length - j, i];
                        var poster = this.randomizePoster();
                        var furni = new Furni(poster, tile, true);
                        this.tileData[tile[0]][tile[1]] = "F";
                        this.addChild(furni);
        
                        break;
                    }
                }
            }
        }
        
        for (var i = 0; i < this.tileData.length; i++) {
            if (Math.random() > 0.5) {
                if (this.tileData[i][0] != "x") {
                    var tile = [i, 0];
                    var randomFurni = this.randomizeFurni(true);
                    var furni = new Furni(randomFurni, tile, false);
                    this.tileData[tile[0]][tile[1]] = "F";
                    this.addChild(furni);
                    break;
                } 
            }
        }
        
        for (var i = 0; i < this.tileData[0].length; i++) {
            if (Math.random() > 0.5) {
                for (var j = 0; j < this.tileData.length; j++) {
                    if (this.tileData[this.tileData.length - j] && this.tileData[this.tileData.length - j][i] == "0") {
                        var tile = [this.tileData.length - j, i];
                        var randomFurni = this.randomizeFurni(true);
                        var furni = new Furni(randomFurni, tile, true);
                        this.tileData[tile[0]][tile[1]] = "F";
                        this.addChild(furni);
                        break;
                    } 
                }
            }
        }
        
        for (var i = 0; i < Math.round(Math.random() * 4); i++) {
            var randomTile = [Math.round(1 + Math.random() * 3), Math.round(1 + Math.random() * 3)];
        
            if (this.tileData[randomTile[0]][randomTile[1]] == "0") {
                var randomFurni = this.randomizeFurni(false);
                var furni = new Furni(randomFurni, randomTile, true);
                this.tileData[randomTile[0]][randomTile[1]] = "F";
                this.addChild(furni);
                break;
            }
        }
        
        for (var i = 0; i < Math.round(Math.random() * 10); i++) {
            var randomTile = [Math.round(Math.random() * 5), Math.round(Math.random() * 5)];
        
            if (this.tileData[randomTile[0]][randomTile[1]] == "0") {
                var randomHabbo = [
                    [1, this.randomizeColors("skin")],
                    [1, this.randomizeColors("clothes")],
                    [1 + RoomsAnimator.randomize(1), this.randomizeColors("clothes")],
                    [1 + RoomsAnimator.randomize(4), this.randomizeColors("clothes")],
                    [1 + RoomsAnimator.randomize(4), this.randomizeColors("hair")]];
                this.habbos.push([randomHabbo, randomTile]);
                var habbo = new Habbo(this.habbos.length -1, 2 + RoomsAnimator.randomize(1) * 2, this);
                this.tileData[randomTile[0]][randomTile[1]] = "H";
                this.addChild(habbo);
            }
        }
    }

    populateTileData() {
        var tileData = [];
        switch (this.roomLayout) {
            case "miniroom1":
                tileData = [["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"]];
                break;
            case "miniroom2":
                tileData = [["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["x", "x", "0", "0", "0", "0"], ["x", "x", "0", "0", "0", "0"]];
                break;
            case "miniroom3":
                tileData = [["0", "0", "0", "0", "x", "x"], ["0", "0", "0", "0", "x", "x"], ["0", "0", "0", "0", "x", "x"], ["0", "0", "0", "0", "x", "x"], ["0", "0", "0", "0", "x", "x"], ["0", "0", "0", "0", "x", "x"]];
                break;
            case "miniroom4":
                tileData = [["0", "0", "0", "0", "x", "x"], ["0", "0", "0", "0", "x", "x"], ["0", "0", "0", "0", "x", "x"], ["0", "0", "0", "0", "x", "x"], ["x", "x", "x", "x", "x", "x"], ["x", "x", "x", "x", "x", "x"]];
                break;
            case "miniroom5":
                tileData = [["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["x", "x", "x", "x", "x", "x"], ["x", "x", "x", "x", "x", "x"]];
                break;
            default:
                tileData = [["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0"]];
                break;
        }
        return tileData;
    }

    randomizeColors(colors) {
        var colorsArray;

        switch (colors) {
            case "skin":
                colorsArray = [16763800, 14921341, 13210211, 13210211, 9788720, 13210211, 16762496, 16758650, 16034900, 16751488, 16767937, 16761764, 16758422, 16746345, 16769936, 16771757, 15716733, 13147990, 12887987, 11044726];
                break;
            case "clothes":
                colorsArray = [16777215, 10855845, 5395026, 16759228, 15753862, 15145738, 10096920, 16769078, 16037139, 11035140, 13827995, 9222937, 4941075, 9830394, 6674133, 5740983, 4615848, 15312379, 12088011, 7753099, 16443051, 9860416, 6311217, 16759401, 16746052, 16539916, 13912832, 7266559, 5609942, 3752596];
                break;
            case "hair":
                colorsArray = [16766633, 14657135, 13729850, 16772793, 16769930, 16633923, 16496152, 10116398, 11293440, 7877632, 14210009, 9538968, 4341327, 16750684, 14055270, 10962757, 6242862, 16746310, 16539916, 14569216, 15073033, 10747791, 3381606, 4353662, 16760252, 13382552, 9725840, 14023167, 6724044, 2368548];
                break;
            case "room":
                colorsArray = [16777215, 10855845, 5395026, 16759228, 15753862, 15145738, 10096920, 16769078, 16037139, 11035140, 13827995, 9222937, 4941075, 9830394, 6674133, 5740983, 4615848, 15312379, 12088011, 7753099, 16443051, 9860416, 6311217, 16759401, 16746052, 16539916, 13912832, 7266559, 5609942, 3752596];
                break;
        }

        var randomColor = colorsArray[RoomsAnimator.randomize(colorsArray.length)];
        var red = (randomColor >> 16) & 0xff;
        var green = (randomColor >> 8) & 0xff;
        var blue = randomColor & 0xff;
        
        return { r: red, g: green, b: blue };
    }

    randomizePoster() {
        var posters = [
            ["miniroom-poster1", true, false, 1],
            ["miniroom-poster2", true, true, 1],
            ["miniroom-poster3", true, true, 1]
        ];

        return posters[Math.floor(Math.random() * posters.length)];
    }

    randomizeFurni(includeTall) {
        var furnis = [
            ["miniroom-furni-bardesk", true, false, 1],
            ["miniroom-furni-carpet", true, true, 1],
            ["miniroom-furni-chair1", true, false, 1],
            ["miniroom-furni-chair2", true, false, 1],
            ["miniroom-furni-chair3", true, true, 1],
            ["miniroom-furni-chair4", false, true, 1],
            ["miniroom-furni-chair5", true, true, 1],
            ["miniroom-furni-chairflower", false, false, 1],
            ["miniroom-furni-duck", true, false, 1],
            ["miniroom-furni-lamp", false, false, 1],
            ["miniroom-furni-pizza", true, false, 1],
            ["miniroom-furni-sink", true, false, 1],
            ["miniroom-furni-table", false, false, 1],
            ["miniroom-furni-tree", false, false, 1],
            ["miniroom-furni-tv", true, false, 1]
        ];

        if (includeTall) {
            furnis.push(
                ["miniroom-furni-fridge", true, false, 1],
                ["miniroom-furni-shelf", true, false, 1],
                ["miniroom-furni-teleport1", true, false, 1],
                ["miniroom-furni-teleport2", true, false, 1]
            );
        }

        return furnis[Math.floor(Math.random() * furnis.length)];
    }

    removeFirstBubble() {
        this.removeChild(this.bubbles[0]);
        this.bubbles.shift();
    }

    getRandomHabboLocation() {
        if (this.habbos.length != 0) {
            var randomHabbo = RoomsAnimator.randomize(this.habbos.length - 1);
            var habboLocation = RoomsAnimator.findLocation(this.habbos[randomHabbo][1]);

            this.removeChild(this.children.filter(c => c.constructor.name == "Habbo" && c.index == randomHabbo)[0]);
            this.habbos.slice(randomHabbo, randomHabbo + 1);

            return habboLocation;
        }
        else {
            return ([32, -16]);
        }
    }

    update() {
        var movement = (2 + this.lane) / 4;
        this.x += movement * 2;
        this.y -= movement; 
        this.updateCache();

        if (Math.random() * (5 / this.habbos.length) < 0.05 && this.habbos.length > 0) {
            var bubble = new Bubble(this);
            this.addChild(bubble);
        }
    }
}