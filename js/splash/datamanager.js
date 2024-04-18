class DataManager {
    constructor() {
        this.init();
    }

    init() {
        this.loader = new createjs.LoadQueue();

        this.habbos = [];
        this.jsonLoaded = false;
        this.imagesLoaded = false;

        this.loadJson();
    }

    loadJson() {
        this.habbos = fetch("js/splash/habbos.json")
            .then(response => response.json())
            .then(data => {
                this.habbos = data;
                this.jsonLoaded = true;
            })
            .catch(error => {
                console.error("Error:", error);
                debugger;
            });
    }

    loadImages() {
        var manifest = [];

        // to-do badge stuff at some point

        this.habbos.forEach(habbo => {
            manifest.push({ type: createjs.LoadQueue.IMAGE, id: "habbo-" + habbo.id, src: "habbo-imaging/avatarimage?figure=" + habbo.figure + "&size=l&direction=4&head_direction=3&crr=0&gesture=sml&frame=1" });
        })

        this.loader.loadManifest(manifest);

        this.loader.on("complete", () => {
            this.imagesLoaded = true;
        });
    }

    getHabbo() {
        var habbo = this.habbos[0];
        this.habbos.shift();
        return habbo;
    }
}