class Viewer extends createjs.Container {
    constructor() {
        super();

        this.left = new createjs.Bitmap(Animation.loader.getResult("viewer-left"));
        this.left.x = 285;
        this.left.y = 103;
        this.left.visible = false;

        this.middle = new createjs.Bitmap(Animation.loader.getResult("viewer-middle"));
        this.middle.x = 291;
        this.middle.y = 103;
        this.middle.scaleX = 2;
        this.middle.visible = false;

        this.right = new createjs.Bitmap(Animation.loader.getResult("viewer-right"));
        this.right.x = 293;
        this.right.y = 103;
        this.right.visible = false;

        this.onlineIcon = new createjs.Bitmap(Animation.loader.getResult("viewer-online"));
        this.onlineIcon.x = 39;
        this.onlineIcon.visible = false;

        this.name = new createjs.Text();
        this.name.font = "bold 14px Verdana";
        this.name.x = 37;
        this.name.visible = false;

        this.motto = new createjs.Text();
        this.motto.font = "12px Verdana";
        this.motto.x = 37;
        this.motto.visible = false;

        this.onlineStatus = new createjs.Text();
        this.onlineStatus.font = "12px Verdana";
        this.onlineStatus.x = 59;
        this.onlineStatus.visible = false;

        this.tile = new createjs.Bitmap(Animation.loader.getResult("viewer-tile"));
        this.tile.x = 274;
        this.tile.y = 180;
        this.tile.scaleX = 0.25;
        this.tile.scaleY = 0.25;
        this.tile.visible = false;

        this.addChild(this.left);
        this.addChild(this.middle);
        this.addChild(this.right);
        this.addChild(this.onlineIcon);
        this.addChild(this.name);
        this.addChild(this.motto);
        this.addChild(this.onlineStatus);
        this.addChild(this.tile);

        this.stepCounter = 0;
        this.paused = true;
    }

    setDetails(habbo) {
        this.name.text = habbo.name;
        this.motto.text = habbo.motto;

        if (habbo.online) {
            this.onlineStatus.text = "Online now!";
        }
        else {
            this.onlineStatus.text = "";
        }

        var mottoEmpty = (habbo.motto === null || habbo.motto === undefined || habbo.motto.trim() === "");
    
        if (habbo.online && !mottoEmpty) {
            this.name.y = 121;
            this.motto.y = 141;
            this.onlineStatus.y = 159;
            this.onlineIcon.y = 152;
        }
        if (habbo.online && mottoEmpty) {
            this.name.y = 129;
            this.onlineStatus.y = 151;
            this.onlineIcon.y = 145;
        }
        if (!habbo.online && !mottoEmpty) {
            this.name.y = 129;
            this.motto.y = 149;
        }
        if (!habbo.online && mottoEmpty) {
            this.name.y = 137;
        }
    }

    update() {
        if (this.paused) {
            return;
        }

        switch (this.stepCounter) {
            case 7:
                this.tile.visible = true;
                break;
            case 8:
                this.tile.x = 259.5;
                this.tile.y = 176.7;
                this.tile.scaleX = 0.5;
                this.tile.scaleY = 0.5;
                break;
            case 9:
                this.tile.x = 245.9;
                this.tile.y = 173.3;
                this.tile.scaleX = 0.75;
                this.tile.scaleY = 0.75;
                this.left.visible = true;
                this.middle.visible = true;
                this.right.visible = true;
                break;
            case 10:
                this.tile.x = 232;
                this.tile.y = 170;
                this.tile.scaleX = 1;
                this.tile.scaleY = 1;
                this.left.x = 220.25;
                this.middle.x = 227;
                this.middle.scaleX = 83;
                this.right.x = 310;
                break;
            case 11:
                this.left.x = 155.5;
                this.middle.x = 163;
                this.middle.scaleX = 164;
                this.right.x = 327;
                break;
            case 12:
                this.left.x = 90.75;
                this.middle.x = 99;
                this.middle.scaleX = 245;
                this.right.x = 344;
                break;
            case 13:
                this.left.x = 26;
                this.middle.x = 35;
                this.middle.scaleX = 326;
                this.right.x = 361;
                this.name.visible = true;
                this.motto.visible = true;
                if (this.onlineStatus.text) {
                    this.onlineIcon.visible = true;
                    this.onlineStatus.visible = true;
                }
                this.paused = true;
                break;
            case 14:
                this.left.x = 90.75;
                this.middle.x = 99;
                this.middle.scaleX = 245;
                this.right.x = 344;
                this.name.visible = false;
                this.motto.visible = false;
                this.onlineIcon.visible = false;
                this.onlineStatus.visible = false;
                break;
            case 15:
                this.left.x = 155.5;
                this.middle.x = 163;
                this.middle.scaleX = 164;
                this.right.x = 327;
                break;
            case 16:
                this.left.x = 220.25;
                this.middle.x = 227;
                this.middle.scaleX = 83;
                this.right.x = 310;
                break;
            case 17:
                this.tile.x = 245.9;
                this.tile.y = 173.3;
                this.tile.scaleX = 0.75;
                this.tile.scaleY = 0.75;
                this.left.x = 285;
                this.middle.x = 291;
                this.middle.scaleX = 2;
                this.right.x = 293;
                break;
            case 18:
                this.tile.x = 259.5;
                this.tile.y = 176.7;
                this.tile.scaleX = 0.5;
                this.tile.scaleY = 0.5;
                this.left.visible = false;
                this.middle.visible = false;
                this.right.visible = false;
                break;
            case 19:
                this.tile.x = 274;
                this.tile.y = 180;
                this.tile.scaleX = 0.25;
                this.tile.scaleY = 0.25;
                break;
            case 20:
                this.tile.visible = false;
                break;
            case 26:
                this.stepCounter = 0;
                this.paused = true;
                break;
            default:
                break;
        }

        this.stepCounter++;
    }
}