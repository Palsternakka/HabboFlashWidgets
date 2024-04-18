class RegisterButton extends createjs.Container {
    constructor() {
        super();

        this.left = new createjs.Bitmap(Animation.loader.getResult("button-left"));

        this.middle = new createjs.Bitmap(Animation.loader.getResult("button-middle"));
        this.middle.x = 6;

        this.right = new createjs.Bitmap(Animation.loader.getResult("button-right"));

        this.text = new createjs.Text();
        this.text.text = "Join now, it's free »";
        this.text.font = "bold 20px Verdana";
        this.text.color = "#FFFFFF";
        this.text.x = 14;
        this.text.y = 10;

        this.addChild(this.left);
        this.addChild(this.middle);
        this.addChild(this.right);
        this.addChild(this.text);

        var textWidth = Math.ceil(this.text.getMeasuredWidth()) + 13; // 13 for same margins, 7 for same button size
        this.middle.scaleX = textWidth;
        this.right.x = textWidth + 6;
        
        this.regX = Math.round(this.getBounds().width / 2) - 10;

        this.initY = 124;

        this.x = -153.1;
        this.y = this.initY;

        this.cache(0, 0, this.getBounds().width, this.getBounds().height);

        var shadow = new createjs.Shadow("rgba(0,0,0,0.25)", 3.5, 4, 0);
        this.shadow = shadow;

        this.stepCounter = 0;

        var hoverFilter = new createjs.ColorFilter(1, 1, 1, 1, 20, 20, 20, 0);
        var clickFilter = new createjs.ColorFilter(1, 1, 1, 1, -20, -20, -20, 0);

        this.cursor = "pointer";

        this.on("mouseover", function(e) {
            this.filters = [hoverFilter];
            this.updateCache();
        });

        this.on("mousedown", function(e) {
            this.filters = [clickFilter];
            this.updateCache();
        });

        this.on("mouseout", function(e) {
            this.filters = [];
            this.updateCache();
        });

        this.on("click", function(e) {
            this.filters = [hoverFilter];
            this.updateCache();

            // to-do goto registration
        });

        Animation.stage.addChild(this);
    }

    update() {
        if (this.paused) {
            return;
        }

        switch (this.stepCounter) {
            case 4:
                this.x = -153.1;
                break;
            case 5:
                this.x = -130.8;
                break;
            case 6:
                this.x = -104.5;
                break;
            case 7:
                this.x = -74.6;
                break;
            case 8:
                this.x = -41.9;
                break;
            case 9:
                this.x = -7.8;
                break;
            case 10:
                this.x = 26.3;
                break;
            case 11:
                this.x = 58.4;
                break;
            case 12:
                this.x = 87.4;
                break;
            case 13:
                this.x = 112.7;
                break;
            case 14:
                this.x = 134;
                break;
            case 15:
                this.x = 151.4;
                break;
            case 16:
                this.x = 165.4;
                break;
            case 17:
                this.x = 176.1;
                break;
            case 18:
                this.x = 183.8;
                break;
            case 19:
                this.x = 189.1;
                break;
            case 20:
                this.x = 192.1;
                break;
            case 21:
                this.x = 193;
                this.paused = true;
                break;
            case 23:
                this.y = this.initY + 2.3;
                break;
            case 24:
                this.y = this.initY + 4.5;
                break;
            case 25:
                this.y = this.initY + 11.7;
                break;
            case 26:
                this.y = this.initY + 18.9;
                break;
            case 27:
                this.y = this.initY + 31;
                break;
            case 28:
                this.y = this.initY + 43.1;
                break;
            case 29:
                this.y = this.initY + 62.7;
                break;
            case 30:
                this.y = this.initY + 82.4;
                break;
            case 31:
                this.y = this.initY + 102;
                break;
            case 32:
                this.y = this.initY + 111.4;
                break;
            case 33:
                this.y = this.initY + 120.8;
                break;
            case 34:
                this.y = this.initY + 125.5;
                break;
            case 35:
                this.y = this.initY + 127;
                break;
            default:
                break;
        }

        Animation.stage.setChildIndex(this, Animation.stage.numChildren - 1);
        this.stepCounter++;
    }
}