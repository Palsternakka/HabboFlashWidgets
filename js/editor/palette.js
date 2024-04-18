class Palette extends createjs.Container {
    constructor() {
        super();
        this.init(0, false);
    }

    init(page, fromButton) {
        this.removeAllChildren();
        this.swatches = [];

        var x = 18;
        var y = 273;

        var category = Animation.interface.tab.category.name;
        if (category == "male" || category == "female") {
            category = "hd";
        }

        var setType = Animation.figureManager.figureData.setTypes.filter(st => st.type == category)[0];

        var colors = [];

        Animation.figureManager.figureData.palettes
            .filter(p => p.id == setType.paletteId)
            .forEach(p => {
                p.colors
                    .filter(c => c.selectable && ((!Animation.figureManager.club && !c.club) || Animation.figureManager.club))
                    .forEach(c => colors.push(c));
            });

        var display = 36;
        var displayNext = false;

        if (colors.length > display) {
            display--;
        }

        if ((page * display) + display < colors.length) {
            displayNext = true;
        }

        if (page > 0) {
            var previous = new createjs.Bitmap(Animation.loader.getResult("color-previous"));

            previous.x = x + 2;
            previous.y = y;

            previous.cursor = "pointer";
            previous.on("click", () =>  this.init(page - 1, true));

            this.addChild(previous);

            x += 30;
        }

        var displayColors = colors
            .slice(page * display, (page * display) + display);

        if (!fromButton) {
            var selectedId = Animation.figureManager.figure.filter(f => f.type == setType.type)[0].colorId;

            if (displayColors.filter(c => c.id == selectedId).length == 0) {
                this.init(page + 1, false);
                return;
            }
        }

        displayColors
            .forEach(c => {
                var swatch = new Swatch(c);
                swatch.x = x;
                swatch.y = y;

                swatch.on("click", () => {
                    var category = Animation.interface.tab.category.name;

                    if (category == "male" || category == "female") {
                        category = "hd";
                    }

                    Animation.figureManager.figure.filter(f => f.type == category)[0].colorId = c.id;
                    Animation.updateInputIfExists("figure", Animation.figureManager.getFigureString());
                });

                this.swatches.push(swatch);

                this.addChild(swatch);

                if (x < 250) {
                    x += 30;
                }
                else {
                    x = 18;
                    y += 29;
                }
            });

        if (displayNext) {
            var next = new createjs.Bitmap(Animation.loader.getResult("color-next"));

            next.x = x + 3;
            next.y = y;

            next.cursor = "pointer";
            next.on("click", () => this.init(page + 1, true));

            this.addChild(next);
        }
    }

    update() {
        this.swatches.forEach(s => s.update());
    }
}