class Frame extends createjs.Container {
    constructor() {
        super();

        this.border = new createjs.Bitmap(Animation.loader.getResult("bg-border"));
        
        this.bottom = new createjs.Bitmap(Animation.loader.getResult("bg-bottom"));
        this.bottom.y = 323;

        this.beta = new createjs.Bitmap(Animation.loader.getResult("beta"));
        this.beta.x = 21;
        this.beta.y = 333;

        // this.text = new createjs.Text();
        // this.text.text = "Habbo is a virtual world where you can meet and make friends.";
        // this.text.font = "bold 13px Verdana";
        // this.text.color = "#285C69";
        // this.text.lineWidth = 300;
        // this.text.lineHeight = 16;
        // this.text.x = 86;
        // this.text.y = 337;

        this.text = new createjs.Text();
        this.text.text = "Welcome to Habbo Legacy Beta! This hotel is a revival of Classic Habbo. To restore your old account, please";
        this.text.font = "bold 11px Verdana";
        this.text.color = "#285C69";
        this.text.lineWidth = 300;
        this.text.x = 86;
        this.text.y = 332;

        this.discord = new createjs.Text();
        this.discord.text = "contact us on Discord";
        this.discord.font = "bold 11px Verdana";
        this.discord.color = "#fc6204";
        this.discord.x = 186;
        this.discord.y = 357;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, this.discord.getMeasuredWidth(), this.discord.getMeasuredHeight());
        this.discord.hitArea = hit;

        this.discord.cursor = "pointer";

        this.on("click", function(e) {
            // to-do goto discord
        });

        this.addChild(this.bottom);
        this.addChild(this.border);
        this.addChild(this.beta);
        this.addChild(this.text);
        this.addChild(this.discord);

        Animation.stage.addChild(this);
    }

    update() {
        Animation.stage.setChildIndex(this, Animation.stage.numChildren - 1);
    }
}