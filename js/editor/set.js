class Set extends createjs.Container {
    constructor(setType, set) {
        super();

        this.id = set.id;
        this.type = setType.type;
        this.paletteId = setType.paletteId;
        this.colorable = set.colorable;
        this.club = set.club;
        this.gender = set.gender;
        this.selected = false;
        this.parts = [];

        this.border = new createjs.Bitmap(Animation.loader.getResult("selected"));
        
        this.image = new createjs.Container();

        set.parts
            .sort((a, b) => {
                return FigureManager.drawOrder.indexOf(a.type) - FigureManager.drawOrder.indexOf(b.type);
            })
          .forEach(p => {
            if (!(setType.type == "hd" && (p.type == "bd" || p.type == "lh" || p.type == "rh"))) {
                var part = new Part(p, this.type);
                part.scaleX = 0.5;
                part.scaleY = 0.5;
                this.parts.push(part);
                this.image.addChild(part);
            }
        });

        switch (this.type) {
            case "hd":
                this.image.regX = 8;
                this.image.regY = -83;
                break;
            case "hr":
                this.image.regX = 7;
                this.image.regY = -88;
                break;
            case "ha":
                this.image.regX = 8;
                this.image.regY = -87;
                break;
            case "ch":
                this.image.regX = 8;
                this.image.regY = -58;
                break;
            case "lg":
                this.image.regX = 8;
                this.image.regY = -37;
                break;
            case "sh":
                this.image.regX = 10;
                this.image.regY = -28;
                break;
            case "wa":
                this.image.regX = 8;
                this.image.regY = -48;
                break;
            case "ea":
                this.image.regX = 11;
                this.image.regY = -80;
                break;
            case "fa":
                this.image.regX = 12;
                this.image.regY = -77;
                break;
            case "ca":
                this.image.regX = 8;
                this.image.regY = -58;
                break;
            case "he":
                this.image.regX = 8;
                this.image.regY = -87;
                break;
        }

        this.on("click", () => {
            Animation.figureManager.updateFigure(this.type, this.id);
            Animation.updateInputIfExists("figure", Animation.figureManager.getFigureString());
        });

        this.addChild(this.border);
        this.addChild(this.image);

        if (this.club) {
            var hc = new createjs.Bitmap(Animation.loader.getResult("hc"));
            hc.x = 30;
            hc.y = 29;

            this.addChild(hc);
        }

        var hitArea = new createjs.Shape();
        hitArea.graphics.beginFill("#000").drawRect(this.x, this.y, 50, 50);
        this.hitArea = hitArea;

        this.cursor = "pointer";
    }

    update() {
        if (Animation.figureManager.figure.filter(f => f.type == this.type && f.setId == this.id).length > 0) {
            this.border.visible = true;
        }
        else {
            this.border.visible = false;
        }

        this.parts.forEach(p => p.update());
    }
}