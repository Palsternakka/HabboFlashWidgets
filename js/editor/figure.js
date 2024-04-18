class Figure extends createjs.Container {
    constructor() {
        super();

        this.x = 439;
        this.y = 266;
        this.scaleX = -1;

        this.init();

        Animation.stage.addChild(this);
    }

    init() {
        var parts = [];
        var hiddenLayers = [];
        this.removeAllChildren();

        var tile = new createjs.Bitmap(Animation.loader.getResult("tile"));
        tile.x = 4;
        tile.y = -32;
        this.addChild(tile);

        Animation.figureManager.figure.filter(f => f.setId).forEach(f => {
            var set = Animation.figureManager.figureData.setTypes.filter(st => st.type == f.type)[0].sets.filter(s => s.id == f.setId)[0];

            set.hiddenLayers.forEach(hl => hiddenLayers.push(hl));

            set.parts.forEach(p => {
                var part = new Part(p, f.type);
                parts.push(part);
            });
        });

        parts
            .filter(p => hiddenLayers.filter(hl => hl == p.type).length == 0)
            .sort((a, b) => {
                return FigureManager.drawOrder.indexOf(a.type) - FigureManager.drawOrder.indexOf(b.type);
            })
            .forEach(p => {
                this.addChild(p);
            });

        parts.forEach(p => p.update());
    }

    update() {
        this.init();
    }
}