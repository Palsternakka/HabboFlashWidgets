class Interface extends createjs.Container {
    constructor() {
        super();

        this.loader = new Loader;
        this.initialized = false;
        
        Animation.stage.addChild(this);
    }

    init() {
        this.removeChild(this.loader);

        var background = new createjs.Bitmap(Animation.loader.getResult("bg"));
        background.y = 45;
        this.addChild(background);

        this.bodyTab = new Tab("body");
        this.bodyTab.x = 18;
        this.bodyCategories = [];
        this.addChild(this.bodyTab);

        this.maleCategory = new Category("male");
        this.maleCategory.x = 10;
        this.maleCategory.y = 50;
        this.maleCategory.visible = true;
        this.bodyCategories.push(this.maleCategory);
        this.addChild(this.maleCategory);

        this.femaleCategory = new Category("female");
        this.femaleCategory.x = 152;
        this.femaleCategory.y = 50;
        this.femaleCategory.visible = true;
        this.bodyCategories.push(this.femaleCategory);
        this.addChild(this.femaleCategory);

        this.headTab = new Tab("head");
        this.headTab.x = 83;
        this.headCategories = [];
        this.addChild(this.headTab);

        this.hrCategory = new Category("hr");
        this.hrCategory.x = 10;
        this.hrCategory.y = 50;
        this.headCategories.push(this.hrCategory);
        this.addChild(this.hrCategory);

        this.haCategory = new Category("ha");
        this.haCategory.x = 68;
        this.haCategory.y = 50;
        this.headCategories.push(this.haCategory);
        this.addChild(this.haCategory);

        this.heCategory = new Category("he");
        this.heCategory.x = 126;
        this.heCategory.y = 50;
        this.headCategories.push(this.heCategory);
        this.addChild(this.heCategory);

        this.eaCategory = new Category("ea");
        this.eaCategory.x = 184;
        this.eaCategory.y = 50;
        this.headCategories.push(this.eaCategory);
        this.addChild(this.eaCategory);

        this.faCategory = new Category("fa");
        this.faCategory.x = 242;
        this.faCategory.y = 50;
        this.headCategories.push(this.faCategory);
        this.addChild(this.faCategory);

        this.shirtTab = new Tab("shirt");
        this.shirtTab.x = 148;
        this.shirtCategories = [];
        this.addChild(this.shirtTab);

        this.chCategory = new Category("ch");
        this.chCategory.x = 10;
        this.chCategory.y = 50;
        this.shirtCategories.push(this.chCategory);
        this.addChild(this.chCategory);

        this.caCategory = new Category("ca");
        this.caCategory.x = 68;
        this.caCategory.y = 50;
        this.shirtCategories.push(this.caCategory);
        this.addChild(this.caCategory);

        this.pantsTab = new Tab("pants");
        this.pantsTab.x = 213;
        this.pantsCategories = [];
        this.addChild(this.pantsTab);

        this.lgCategory = new Category("lg");
        this.lgCategory.x = 10;
        this.lgCategory.y = 50;
        this.pantsCategories.push(this.lgCategory);
        this.addChild(this.lgCategory);

        this.shCategory = new Category("sh");
        this.shCategory.x = 68;
        this.shCategory.y = 50;
        this.pantsCategories.push(this.shCategory);
        this.addChild(this.shCategory);

        this.waCategory = new Category("wa");
        this.waCategory.x = 126;
        this.waCategory.y = 50;
        this.pantsCategories.push(this.waCategory);
        this.addChild(this.waCategory);

        this.tab = this.bodyTab;
        this.bodyTab.category = Animation.figureManager.gender == "M" ? this.maleCategory : this.femaleCategory;
        this.headTab.category = this.hrCategory;
        this.shirtTab.category = this.chCategory;
        this.pantsTab.category = this.lgCategory;

        this.setType = new SetType();
        this.addChild(this.setType);

        this.palette = new Palette();
        this.addChild(this.palette);

        var randomizeButton = new createjs.Bitmap(Animation.loader.getResult("randomize-button"));
        randomizeButton.on("click", () => {
            // to-do poof animation
            Animation.figureManager.figure = Animation.figureManager.randomizeFigure();
            Animation.updateInputIfExists("figure", Animation.figureManager.getFigureString());
        });
        randomizeButton.cursor = "pointer";
        randomizeButton.x = 307;
        randomizeButton.y = 46;
        this.addChild(randomizeButton);

        var randomizeLabel = new createjs.Text("Randomise");
        randomizeLabel.font = "13px Verdana";
        randomizeLabel.x = 333;
        randomizeLabel.y = 52;
        this.addChild(randomizeLabel);

        this.figure = new Figure();
        this.addChild(this.figure);

        this.initialized = true;
    }

    showTab(tab) {
        this.tab = tab;
        this.palette.init(0, false);
        this.setType.init(0, false);

        switch (tab.name) {
            case "body":
                this.bodyCategories.forEach(bc => bc.visible = true);
                this.headCategories.forEach(hc => hc.visible = false);
                this.shirtCategories.forEach(sc => sc.visible = false);
                this.pantsCategories.forEach(pc => pc.visible = false);
                break;
            case "head":
                this.bodyCategories.forEach(bc => bc.visible = false);
                this.headCategories.forEach(hc => hc.visible = true);
                this.shirtCategories.forEach(sc => sc.visible = false);
                this.pantsCategories.forEach(pc => pc.visible = false);
                break;
            case "shirt":
                this.bodyCategories.forEach(bc => bc.visible = false);
                this.headCategories.forEach(hc => hc.visible = false);
                this.shirtCategories.forEach(sc => sc.visible = true);
                this.pantsCategories.forEach(pc => pc.visible = false);
                break;
            case "pants":
                this.bodyCategories.forEach(bc => bc.visible = false);
                this.headCategories.forEach(hc => hc.visible = false);
                this.shirtCategories.forEach(sc => sc.visible = false);
                this.pantsCategories.forEach(pc => pc.visible = true);
                break;
        }
    }

    update() {
        if (Animation.figureManager.jsonLoaded && Animation.figureManager.imagesLoaded) {
            if (!this.initialized) {
                Animation.figureManager.loadFigure();
                Animation.figureManager.loadSets();
                this.init();
            }
            else {
                this.bodyTab.update();
                this.bodyCategories.forEach(bc => bc.update());
                
                this.headTab.update();
                this.headCategories.forEach(hc => hc.update());
                
                this.shirtTab.update();
                this.shirtCategories.forEach(sc => sc.update());
        
                this.pantsTab.update();
                this.pantsCategories.forEach(pc => pc.update());

                this.setType.update(0);
                this.palette.update(0);
                this.figure.update();
            }
        }
        else {
            this.loader.update();
        }
    }
}