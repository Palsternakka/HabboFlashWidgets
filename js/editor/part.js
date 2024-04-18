class Part extends createjs.Bitmap {
    constructor(part, setType) {
        super(Animation.figureManager.loader.getResult("h_std_" + part.type + "_" + part.id + "_2_0"));

        this.id = part.id;
        this.type = part.type;
        this.setType = setType;
        this.colorable = part.colorable;

        this.regX = -FigureManager.offsets["h_std_" + part.type + "_" + part.id + "_2_0"]?.x * 2 ?? 0;
        this.regY = -FigureManager.offsets["h_std_" + part.type + "_" + part.id + "_2_0"]?.y * 2 ?? 0;
    }

    update() { 
        if (this.colorable && this.type != "ey" && this.image) {
            var colorId = Animation.figureManager.figure.filter(f => f.type == this.setType)[0]?.colorId;
        
            if (!colorId) {
                var paletteId = Animation.figureManager.figureData.setTypes.filter(st => st.type == this.setType)[0].paletteId;
                colorId = Animation.figureManager.figureData.palettes.filter(p => p.id == paletteId)[0].colors[0].id;
            }

            var rgb = Animation.figureManager.getColorIdRgb(colorId);
            var colorFilter = new createjs.ColorFilter(rgb.r / 255, rgb.g / 255, rgb.b / 255, 1);
            this.filters = [colorFilter];
            this.cache(0, 0, this.image.width, this.image.height);
        }
    }
}