class Tab extends createjs.Container {
    constructor(name) {
        super();

        this.name = name;
        this.selected = false;

        this.background = new createjs.Bitmap(Animation.loader.getResult("tab" + (this.name == "body" ? "-selected" : "")));
        this.icon = new createjs.Bitmap(Animation.loader.getResult("tab-" + this.name + (this.name == "body" ? "-selected" : "")));
        this.icon.x = 12;
        this.icon.y = 5;

        this.on("click", () => {
            Animation.interface.showTab(this);
        });
        
        this.addChild(this.background);
        this.addChild(this.icon);

        this.cursor = "pointer";
    }

    update() {
        if (Animation.interface.tab == this && !this.selected) {
            this.selected = true;
            this.background.image = Animation.loader.getResult("tab-selected");
            this.icon.image = Animation.loader.getResult("tab-" + this.name + "-selected");
        }
        if (Animation.interface.tab != this && this.selected) {
            this.selected = false;
            this.background.image = Animation.loader.getResult("tab");
            this.icon.image = Animation.loader.getResult("tab-" + this.name);
        }
    }
}