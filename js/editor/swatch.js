class Swatch extends createjs.Container {
    constructor(color) {
        super();        

        this.colorId = color.id;

        var swatch = new createjs.Bitmap(Animation.loader.getResult("swatch"));
        var rgb = Animation.figureManager.getColorIdRgb(color.id);
        var colorFilter = new createjs.ColorFilter(rgb.r / 255, rgb.g / 255, rgb.b / 255, 1);
        swatch.filters = [colorFilter];
        swatch.cache(0, 0, swatch.image.width, swatch.image.height);
        this.addChild(swatch);

        if (color.club) {
            var hc = new createjs.Bitmap(Animation.loader.getResult("hc"));
            hc.x = -2;
            hc.y = -2;
            this.addChild(hc);
        }

        this.border = new createjs.Bitmap(Animation.loader.getResult("swatch-selected"));
        this.border.x = -3;
        this.border.y = -3;
        
        var category = Animation.interface.tab.category.name;

        if (category == "male" || category == "female") {
            category = "hd";
        }

        if (Animation.figureManager.figure.filter(f => f.type == category)[0].colorId == this.colorId) {
            this.border.visible = true;
        }
        else {
            this.border.visible = false;
        }

        this.addChild(this.border);

        this.cursor = "pointer";
    }

    update() {
        var category = Animation.interface.tab.category.name;

        if (category == "male" || category == "female") {
            category = "hd";
        }

        if (Animation.figureManager.figure.filter(f => f.type == category)[0].colorId == this.colorId) {
            this.border.visible = true;
        }
        else {
            this.border.visible = false;
        }
    }
}