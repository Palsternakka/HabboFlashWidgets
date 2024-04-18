class SetType extends createjs.Container {
    constructor() {
        super();
        this.init(0, false);
    }

    init(page, fromButton) {
        this.removeAllChildren();

        var x = 14;
        var y = 96;

        var category = Animation.interface.tab.category.name;
        if (category == "male" || category == "female") {
            category = "hd";
        }

        this.setType = Animation.figureManager.figureData.setTypes.filter(st => st.type == category)[0];

        if (!this.setType.mandatory && page == 0) {
            this.clear = new createjs.Container();
            this.clearIcon = new createjs.Bitmap(Animation.loader.getResult("clear"));

            this.clear.x = x;
            this.clear.y = y;

            var hitArea = new createjs.Shape();
            hitArea.graphics.beginFill("#000").drawRect(this.x, this.y, 50, 50);
            this.clear.hitArea = hitArea;
    
            this.clear.cursor = "pointer";
            this.clear.on("click", () => {
                Animation.figureManager.updateFigure(this.setType.type, null);
                Animation.updateInputIfExists("figure", Animation.figureManager.getFigureString());
            });

            this.clear.addChild(this.clearIcon);
            this.addChild(this.clear);

            x += 54;
        }

        if (page > 0) {
            var previous = new createjs.Container();
            var previousIcon = new createjs.Bitmap(Animation.loader.getResult("previous"));

            previous.x = x;
            previous.y = y;
            previousIcon.x = 12;
            previousIcon.y = 12;

            var hitArea = new createjs.Shape();
            hitArea.graphics.beginFill("#000").drawRect(this.x, this.y, 50, 50);
            previous.hitArea = hitArea;

            previous.cursor = "pointer";
            previous.on("click", () => this.init(page - 1, true));

            previous.addChild(previousIcon);
            this.addChild(previous);

            x += 54;
        }

        var sets = Animation.figureManager.sets
            .filter(s => s.type == category && (s.gender == Animation.figureManager.gender || s.gender == "U"))
        
        var display = 15;
        var displayNext = false;

        if (!this.setType.mandatory || page > 0) {
            display--;
        }

        if (sets.length > display) {
            display--;
        }

        if ((page * display) + display < sets.length) {
            displayNext = true;
        }

        var displaySets = sets
            .slice(page * display, (page * display) + display);

        if (!fromButton) {
            var selectedId = Animation.figureManager.figure.filter(f => f.type == this.setType.type)[0].setId;

            if (selectedId && displaySets.filter(s => s.id == selectedId).length == 0) {
                this.init(page + 1, false);
                return;
            }
        }

        displaySets
            .forEach(s => {
                s.x = x;
                s.y = y;

                this.addChild(s);

                if (x < 200) {
                    x += 54;
                }
                else {
                    x = 14;
                    y += 54;
                }
            });

        if (displayNext) {
            var next = new createjs.Container();
            var nextIcon = new createjs.Bitmap(Animation.loader.getResult("next"));

            next.x = x;
            next.y = y;
            nextIcon.x = 14;
            nextIcon.y = 12;

            var hitArea = new createjs.Shape();
            hitArea.graphics.beginFill("#000").drawRect(this.x, this.y, 50, 50);
            next.hitArea = hitArea;

            next.cursor = "pointer";
            next.on("click", () => this.init(page + 1, true));

            next.addChild(nextIcon);
            this.addChild(next);
        }
    }

    update() {
        if (!this.setType.mandatory && !Animation.figureManager.figure.filter(f => f.type == this.setType.type)[0].setId) {
            this.clearIcon.image = Animation.loader.getResult("clear-selected");
        }
        if (!this.setType.mandatory && Animation.figureManager.figure.filter(f => f.type == this.setType.type)[0].setId) {
            this.clearIcon.image = Animation.loader.getResult("clear");
        }

        Animation.figureManager.sets.forEach(s => s.update());
    }
}