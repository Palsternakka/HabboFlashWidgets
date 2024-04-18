function Animation() { }

Animation.loader = new createjs.LoadQueue();

Animation.loader.loadManifest([
    { id: "bg-border", src: "img/splash/bg-border.png" },
    { id: "bg-pattern", src: "img/splash/bg-pattern.png" },
    { id: "miniroom1-floor", src: "img/splash/miniroom1-floor.png" },
    { id: "miniroom1-walls", src: "img/splash/miniroom1-walls.png" },
    { id: "miniroom2-floor", src: "img/splash/miniroom2-floor.png" },
    { id: "miniroom2-walls", src: "img/splash/miniroom2-walls.png" },
    { id: "miniroom3-floor", src: "img/splash/miniroom3-floor.png" },
    { id: "miniroom3-walls", src: "img/splash/miniroom3-walls.png" },
    { id: "miniroom4-floor", src: "img/splash/miniroom4-floor.png" },
    { id: "miniroom4-walls", src: "img/splash/miniroom4-walls.png" },
    { id: "miniroom5-floor", src: "img/splash/miniroom5-floor.png" },
    { id: "miniroom5-walls", src: "img/splash/miniroom5-walls.png" },
    { id: "miniroom-door", src: "img/splash/miniroom-door.png" },
    { id: "miniroom-poster1", src: "img/splash/miniroom-poster1.png" },
    { id: "miniroom-poster2", src: "img/splash/miniroom-poster2.png" },
    { id: "miniroom-poster3", src: "img/splash/miniroom-poster3.png" },
    { id: "miniroom-furni-bardesk", src: "img/splash/miniroom-furni-bardesk.png" },
    { id: "miniroom-furni-carpet", src: "img/splash/miniroom-furni-carpet.png" },
    { id: "miniroom-furni-chair1", src: "img/splash/miniroom-furni-chair1.png" },
    { id: "miniroom-furni-chair2", src: "img/splash/miniroom-furni-chair2.png" },
    { id: "miniroom-furni-chair3", src: "img/splash/miniroom-furni-chair3.png" },
    { id: "miniroom-furni-chair4", src: "img/splash/miniroom-furni-chair4.png" },
    { id: "miniroom-furni-chair5", src: "img/splash/miniroom-furni-chair5.png" },
    { id: "miniroom-furni-chairflower", src: "img/splash/miniroom-furni-chairflower.png" },
    { id: "miniroom-furni-duck", src: "img/splash/miniroom-furni-duck.png" },
    { id: "miniroom-furni-lamp", src: "img/splash/miniroom-furni-lamp.png" },
    { id: "miniroom-furni-pizza", src: "img/splash/miniroom-furni-pizza.png" },
    { id: "miniroom-furni-sink", src: "img/splash/miniroom-furni-sink.png" },
    { id: "miniroom-furni-table", src: "img/splash/miniroom-furni-table.png" },
    { id: "miniroom-furni-tree", src: "img/splash/miniroom-furni-tree.png" },
    { id: "miniroom-furni-tv", src: "img/splash/miniroom-furni-tv.png" },
    { id: "miniroom-furni-fridge", src: "img/splash/miniroom-furni-fridge.png" },
    { id: "miniroom-furni-shelf", src: "img/splash/miniroom-furni-shelf.png" },
    { id: "miniroom-furni-teleport1", src: "img/splash/miniroom-furni-teleport1.png" },
    { id: "miniroom-furni-teleport2", src: "img/splash/miniroom-furni-teleport2.png" },
    { id: "miniroom-furni-teleport2", src: "img/splash/miniroom-furni-teleport2.png" },
    { id: "habbo-shoes-std-1-2-0", src: "img/splash/habbo-shoes-std-1-2-0.png" },
    { id: "habbo-shirt-std-1-2-0", src: "img/splash/habbo-shirt-std-1-2-0.png" },
    { id: "habbo-shirt-std-2-2-0", src: "img/splash/habbo-shirt-std-2-2-0.png" },
    { id: "habbo-shirt-std-3-2-0", src: "img/splash/habbo-shirt-std-3-2-0.png" },
    { id: "habbo-shirt-std-4-2-0", src: "img/splash/habbo-shirt-std-4-2-0.png" },
    { id: "habbo-shirt-std-5-2-0", src: "img/splash/habbo-shirt-std-5-2-0.png" },
    { id: "habbo-shirt-std-6-2-0", src: "img/splash/habbo-shirt-std-6-2-0.png" },
    { id: "habbo-pants-std-1-2-0", src: "img/splash/habbo-pants-std-1-2-0.png" },
    { id: "habbo-pants-std-2-2-0", src: "img/splash/habbo-pants-std-2-2-0.png" },
    { id: "habbo-hair-std-1-2-0", src: "img/splash/habbo-hair-std-1-2-0.png" },
    { id: "habbo-hair-std-2-2-0", src: "img/splash/habbo-hair-std-2-2-0.png" },
    { id: "habbo-hair-std-3-2-0", src: "img/splash/habbo-hair-std-3-2-0.png" },
    { id: "habbo-hair-std-4-2-0", src: "img/splash/habbo-hair-std-4-2-0.png" },
    { id: "habbo-body-std-1-2-0", src: "img/splash/habbo-body-std-1-2-0.png" },
    { id: "bubble-right", src: "img/splash/bubble-right.png" },
    { id: "bubble-minitext", src: "img/splash/bubble-minitext.png" },
    { id: "bubble-middle", src: "img/splash/bubble-middle.png" },
    { id: "bubble-left", src: "img/splash/bubble-left.png" },
    { id: "blinker", src: "img/splash/blinker.png" },
    { id: "ph-habbo", src: "img/splash/ph-habbo.png" },
    { id: "puff-1", src: "img/splash/puff-1.png" },
    { id: "puff-2", src: "img/splash/puff-2.png" },
    { id: "puff-3", src: "img/splash/puff-3.png" },
    { id: "puff-4", src: "img/splash/puff-4.png" },
    { id: "puff-5", src: "img/splash/puff-5.png" },
    { id: "puff-6", src: "img/splash/puff-6.png" },
    { id: "viewer-tile", src: "img/splash/viewer-tile.png" },
    { id: "viewer-left", src: "img/splash/viewer-left.png" },
    { id: "viewer-middle", src: "img/splash/viewer-middle.png" },
    { id: "viewer-right", src: "img/splash/viewer-right.png" },
    { id: "viewer-online", src: "img/splash/viewer-online.png" },
    { id: "button-left", src: "img/splash/button-left.png" },
    { id: "button-middle", src: "img/splash/button-middle.png" },
    { id: "button-right", src: "img/splash/button-right.png" },
    { id: "bg-bottom", src: "img/splash/bg-bottom.png" },
    { id: "beta", src: "img/splash/beta.png" }
]);

Animation.loader.on("complete", () => {
    Animation.stage = new createjs.Stage("anim");
    Animation.stage.enableMouseOver();

    Animation.dataManager = new DataManager();
    Animation.roomsAnimator = new RoomsAnimator();
    Animation.habboViewer = new HabboViewer();
    Animation.registerButton = new RegisterButton();
    Animation.frame = new Frame();

    createjs.Ticker.framerate = 20;
    createjs.Ticker.addEventListener("tick", Animation.tick, 50);
});

Animation.offsets = {
    "miniroom1-floor": { x: 0, y: -23},
    "miniroom1-walls": { x: -4, y: -55},
    "miniroom2-floor": { x: 0, y: -15},
    "miniroom2-walls": { x: -4, y: -47},
    "miniroom3-floor": { x: 0, y: -23},
    "miniroom3-walls": { x: -4, y: -55},
    "miniroom4-floor": { x: 0, y: -15},
    "miniroom4-walls": { x: -4, y: -47},
    "miniroom5-floor": { x: 0, y: -15},
    "miniroom5-walls": { x: -4, y: -47},
    "miniroom-door": { x: 15, y: -33 },
    "miniroom-poster1": { x: -1, y: -26},
    "miniroom-poster2": { x: 0, y: -22},
    "miniroom-poster3": { x: 0, y: -17},
    "miniroom-furni-bardesk": { x: 0, y: -12 },
    "miniroom-furni-carpet": { x: 0, y: -4 },
    "miniroom-furni-chair1": { x: 0, y: -14 },
    "miniroom-furni-chair2": { x: 0, y: -14 },
    "miniroom-furni-chair3": { x: 0, y: -13 },
    "miniroom-furni-chair4": { x: 0, y: -11 },
    "miniroom-furni-chair5": { x: 0, y: -11 },
    "miniroom-furni-chairflower": { x: 0, y: -21 },
    "miniroom-furni-duck": { x: 0, y: -5 },
    "miniroom-furni-lamp": { x: 0, y: -23 },
    "miniroom-furni-pizza": { x: 0, y: -5 },
    "miniroom-furni-sink": { x: 0, y: -14 },
    "miniroom-furni-table": { x: 0, y: -13 },
    "miniroom-furni-tree": { x: -4, y: -35 },
    "miniroom-furni-tv": { x: 0, y: -14 },
    "miniroom-furni-fridge": { x: 0, y: -25 },
    "miniroom-furni-shelf": { x: 0, y: -24 },
    "miniroom-furni-teleport1": { x: 0, y: -28 },
    "miniroom-furni-teleport2": { x: -1, y: -30 },
    "ph-habbo": { x: -1, y: -30 }
}

Animation.tick = function () {
    Animation.roomsAnimator.update();
    Animation.habboViewer.update();
    Animation.registerButton.update();
    Animation.frame.update();
    Animation.stage.update();
}