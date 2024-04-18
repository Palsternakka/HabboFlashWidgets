function Animation() { }

Animation.loader = new createjs.LoadQueue();

Animation.loader.loadManifest([
    { id: "bg", src: "img/editor/bg.png" },
    { id: "swatch-selected", src: "img/editor/swatch-selected.png" },
    { id: "next", src: "img/editor/next.png" },
    { id: "category-fa", src: "img/editor/category-fa.png" },
    { id: "tab-shirt", src: "img/editor/tab-shirt.png" },
    { id: "loader-3", src: "img/editor/loader-3.png" },
    { id: "tab-body-selected", src: "img/editor/tab-body-selected.png" },
    { id: "selected", src: "img/editor/selected.png" },
    { id: "tile", src: "img/editor/tile.png" },
    { id: "randomize-button", src: "img/editor/randomize-button.png" },
    { id: "tab-head", src: "img/editor/tab-head.png" },
    { id: "tab-shirt-selected", src: "img/editor/tab-shirt-selected.png" },
    { id: "clear", src: "img/editor/clear.png" },
    { id: "loader-1", src: "img/editor/loader-1.png" },
    { id: "category-ea", src: "img/editor/category-ea.png" },
    { id: "tab-body", src: "img/editor/tab-body.png" },
    { id: "category-sh", src: "img/editor/category-sh.png" },
    { id: "loader-2", src: "img/editor/loader-2.png" },
    { id: "tab-pants-selected", src: "img/editor/tab-pants-selected.png" },
    { id: "category-ch", src: "img/editor/category-ch.png" },
    { id: "previous", src: "img/editor/previous.png" },
    { id: "category-wa", src: "img/editor/category-wa.png" },
    { id: "category-he", src: "img/editor/category-he.png" },
    { id: "color-next", src: "img/editor/color-next.png" },
    { id: "category-female", src: "img/editor/category-female.png" },
    { id: "category-ca", src: "img/editor/category-ca.png" },
    { id: "hc", src: "img/editor/hc.png" },
    { id: "category-gender-selected", src: "img/editor/category-gender-selected.png" },
    { id: "category-ha", src: "img/editor/category-ha.png" },
    { id: "loader-4", src: "img/editor/loader-4.png" },
    { id: "tab-pants", src: "img/editor/tab-pants.png" },
    { id: "tab", src: "img/editor/tab.png" },
    { id: "tab-selected", src: "img/editor/tab-selected.png" },
    { id: "category-lg", src: "img/editor/category-lg.png" },
    { id: "category-hr", src: "img/editor/category-hr.png" },
    { id: "category-selected", src: "img/editor/category-selected.png" },
    { id: "tab-head-selected", src: "img/editor/tab-head-selected.png" },
    { id: "swatch", src: "img/editor/swatch.png" },
    { id: "category-male", src: "img/editor/category-male.png" },
    { id: "color-previous", src: "img/editor/color-previous.png" },
    { id: "clear-selected", src: "img/editor/clear-selected.png" }
]);

Animation.loader.on("complete", () => {
    Animation.stage = new createjs.Stage("anim");
    Animation.stage.enableMouseOver();
    
    Animation.figureManager = new FigureManager();
    Animation.interface = new Interface();

    createjs.Ticker.framerate = 20;
    createjs.Ticker.addEventListener("tick", Animation.tick, 50);
});

Animation.updateInputIfExists = function(elementId, value) {
    var el = document.getElementById(elementId);
        
    if(el) {
        el.value = value;
    }
}

Animation.tick = function () {
    Animation.interface.update();
    Animation.stage.update();
}