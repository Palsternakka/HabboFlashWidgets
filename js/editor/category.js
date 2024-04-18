class Category extends createjs.Container {
    constructor(name) {
        super();

        this.name = name;
        this.selected = false;
        this.visible = false;

        var background = name == "male" || name == "female" ? "category-gender-selected" : "category-selected";

        this.background = new createjs.Bitmap(Animation.loader.getResult(background));
        this.background.visible = (name == "male" && Animation.figureManager.gender == "M") || (name == "female" && Animation.figureManager.gender == "F");

        this.icon = new createjs.Bitmap(Animation.loader.getResult("category-" + this.name));
        this.icon.x = 5;

        this.on("click", () => {
            Animation.interface.tab.category = this;

            if (this.name == "male") {
                if (Animation.figureManager.gender == "M") {
                    return;
                }

                Animation.figureManager.lastFemaleFigure = Animation.figureManager.figure;
                Animation.figureManager.gender = "M";
                Animation.updateInputIfExists("gender", "M");
                Animation.figureManager.figure = Animation.figureManager.lastMaleFigure ?? Animation.figureManager.randomizeFigure();
                Animation.updateInputIfExists("figure", Animation.figureManager.getFigureString());
            }
            if (this.name == "female") {
                if (Animation.figureManager.gender == "F") {
                    return;
                }

                Animation.figureManager.lastMaleFigure = Animation.figureManager.figure;
                Animation.figureManager.gender = "F";
                Animation.updateInputIfExists("gender", "F");
                Animation.figureManager.figure = Animation.figureManager.lastFemaleFigure ?? Animation.figureManager.randomizeFigure();
                Animation.updateInputIfExists("figure", Animation.figureManager.getFigureString());
            }

            Animation.interface.palette.init(0, false);
            Animation.interface.setType.init(0, false);
        });
        
        this.addChild(this.background);
        this.addChild(this.icon);

        if (this.name == "male") {
            var label = new createjs.Text("Male");
            label.font = "13px Verdana";
            label.x = 44;
            label.y = 12;
            this.addChild(label);
        }

        if (this.name == "female") {
            var label = new createjs.Text("Female");
            label.font = "13px Verdana";
            label.x = 44;
            label.y = 12;
            this.addChild(label);
        }

        var hitArea = new createjs.Shape();
        hitArea.graphics.beginFill("#000").drawRect(this.x + 5, this.y, this.name == "male" || this.name == "female" ? 125 : 37, 37);
        this.hitArea = hitArea;

        this.cursor = "pointer";
    }

    update() {
        if (Animation.interface.tab.category == this && !this.selected) {
            this.selected = true;
            this.background.visible = true;
        }
        if (Animation.interface.tab.category != this && this.selected) {
            this.selected = false;
            this.background.visible = false;
        }
    }
}