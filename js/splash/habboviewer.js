class HabboViewer {
    constructor() {
        this.blinker = new createjs.Bitmap(Animation.loader.getResult("blinker"));
        this.blinker.visible = false;
        Animation.stage.addChild(this.blinker);

        this.outlines = [];

        for (var i = 0; i < 5; i++) {
            this.outlines[i] = new createjs.Bitmap(Animation.loader.getResult("ph-habbo"));
            this.outlines[i].visible = false;
            Animation.stage.addChild(this.outlines[i]);
        }

        this.viewer = new Viewer();
        Animation.stage.addChild(this.viewer);

        this.habboImage = new createjs.Bitmap();
        Animation.stage.addChild(this.habboImage);

        this.roomAndHabboLocation = null;
        this.viewStatus = "waitForJson";

        this.stepCounter = 0;

        this.startHiddenSteps = 60;
        this.hiddenSteps = 50;
        this.blinkingSteps = 10;
        this.animInSteps = 12;
        this.showingSteps = 70;
        this.animOutSteps = 10;

        this.animStartPoint = [10, 50];
        this.animEndPoint = [260, 42];
        this.habboImageOffset = [-32, -42];

        this.habbo = null;

        this.puffs = [];
    }

    update() {
        this.viewer.update();

        for (var i = 0; i < this.puffs.length; i++) {
            var puff = this.puffs[i];

            if (puff.done) {
                this.puffs.splice(i, 1);
                Animation.stage.removeChild(puff);
            }
            else {
                puff.update();
            }
        };

        switch (this.viewStatus) {
            case "waitForJson": {
                if (Animation.dataManager.jsonLoaded && this.stepCounter > this.startHiddenSteps) {
                    this.viewStatus = "hidden";
                    this.stepCounter = 0;
                    Animation.dataManager.loadImages();
                }
                else {
                    this.stepCounter++;
                }
                break;
            }

            case "hidden": {
                if (Animation.dataManager.imagesLoaded && this.stepCounter > this.hiddenSteps) {
                    this.viewStatus = "blinking";
                    this.stepCounter = 0;
                    this.roomAndHabboLocation = Animation.roomsAnimator.getRoomAndRandomHabboLocation();
                    Animation.registerButton.paused = false;
                }
                else {
                    this.stepCounter++;
                }
                break;
            }

            case "blinking": {
                if (this.stepCounter <= this.blinkingSteps) {
                    this.blinker.x = this.roomAndHabboLocation[0].x + this.roomAndHabboLocation[1][0] + 1;
                    this.blinker.y = this.roomAndHabboLocation[0].y + this.roomAndHabboLocation[1][1] - 18;

                    if (this.stepCounter % 2 < 1) {
                        this.blinker.visible = true;
                    }
                    else {
                        this.blinker.visible = false;
                    }

                    this.stepCounter++;
                }
                else {
                    this.blinker.visible = false;
                    this.stepCounter = 0;
                    this.animStartPoint = [this.roomAndHabboLocation[0].x + this.roomAndHabboLocation[1][0] + 1, this.roomAndHabboLocation[0].y + this.roomAndHabboLocation[1][1] - 18];
                    this.viewStatus = "animateIn";
                    this.habbo = Animation.dataManager.getHabbo();
                    this.viewer.setDetails(this.habbo);
                    this.viewer.paused = false;
                }
                break;
            }

            case "animateIn": {
                if (this.stepCounter <= this.animInSteps) {
                    for (var i = 0; i < this.outlines.length - 1; i++) {
                        this.outlines[i].visible = true;
                        var animCompleteness = this.stepCounter / (this.animInSteps - i);
                        
                        if (animCompleteness > 1) {
                            animCompleteness = 1;
                        }
                        
                        this.outlines[i].x = this.animStartPoint[0] + (this.animEndPoint[0] - this.animStartPoint[0]) * animCompleteness;
                        this.outlines[i].y = this.animStartPoint[1] + (this.animEndPoint[1] - this.animStartPoint[1]) * animCompleteness;
                        this.outlines[i].scaleX = (10 + animCompleteness * 90) / 100;
                        this.outlines[i].scaleY = (10 + animCompleteness * 90) / 100;
                    }
                    if (animCompleteness == 1) {
                        if (!this.habbo) { debugger; }

                        this.habboImage.visible = true;
                        this.habboImage.x = this.animEndPoint[0] + this.habboImageOffset[0];
                        this.habboImage.y = this.animEndPoint[1] + this.habboImageOffset[1] - (this.animInSteps - (this.stepCounter + 1)) * 2;     
                        this.habboImage.image = Animation.dataManager.loader.getResult("habbo-" + this.habbo.id);
                    
                        // to-do scaling is antialiased, can't figure out how to fix it, instead getting large avatar image
                        this.habboImage.scaleX = 1;
                        this.habboImage.scaleY = 1;
                    }
                    this.stepCounter++;
                }
                else {
                    for (var i = 0; i < this.outlines.length -1; i++) {
                        this.outlines[i].visible = false;
                    }

                    this.habboImage.x = this.animEndPoint[0] + this.habboImageOffset[0];
                    this.habboImage.y = this.animEndPoint[1] + this.habboImageOffset[1];

                    // to-do badge stuff at some point

                    this.stepCounter = 0;
                    this.viewStatus = "showing";
                }
                break;
            }

            case "showing": {
                if (this.stepCounter < this.showingSteps) {
                    this.stepCounter++;
                }
                else {
                    this.viewer.paused = false;
                    this.viewStatus = "animateOut";
                    this.stepCounter = 0;
                }
                break;
            }

            case "animateOut": {
                if (this.stepCounter < this.animOutSteps) {
                    var puff = new Puff();
                    puff.x = this.animEndPoint[0] - 20 + Math.random() * 80;
                    puff.y = this.animEndPoint[1] - 10 + Math.random() * 160;
                    
                    this.puffs.push(puff);
                    Animation.stage.addChild(puff);

                    var animCompleteness = this.stepCounter / this.animOutSteps;

                    this.habboImage.x = this.animEndPoint[0] + this.habboImageOffset[0] + 80 * animCompleteness;
                    this.habboImage.y = this.animEndPoint[1] + this.habboImageOffset[1] + 160 * animCompleteness;
                    
                    var scale = (100 - 100 * animCompleteness * 1.500000) / 100;
                    
                    if (scale < 0) {
                        scale = 0;
                    }

                    this.habboImage.scaleX = scale;
                    this.habboImage.scaleY = scale;

                    this.stepCounter++;
                }
                else {
                    this.habboImage.visible = false;
                    this.stepCounter = 0;

                    if (Animation.dataManager.habbos.length == 0) {
                        Animation.dataManager.init();
                        this.viewStatus = "waitForJson";
                    }
                    else {
                        this.viewStatus = "hidden";
                    }
                }
                break;
            }
        }

        Animation.stage.setChildIndex(this.blinker, Animation.stage.numChildren - 1);

        this.outlines.forEach(o => {
            Animation.stage.setChildIndex(o, Animation.stage.numChildren - 1);
        });

        Animation.stage.setChildIndex(this.viewer, Animation.stage.numChildren - 1);

        Animation.stage.setChildIndex(this.habboImage, Animation.stage.numChildren - 1);

        this.puffs.forEach(p => {
            Animation.stage.setChildIndex(p, Animation.stage.numChildren - 1);
        });
    }
}