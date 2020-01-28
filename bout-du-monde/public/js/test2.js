$(document).ready(function () {

    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new PIXI.Renderer({width: w, height: h});
    const wrap = document.querySelector('.wrapper');
    wrap.appendChild(renderer.view);

    let stage = new PIXI.Container();
    let container = new PIXI.Container();
    let foreground = new PIXI.Container();

    stage.addChild(container);
    stage.addChild(foreground);

    let f, fg;
    let mousex = w / 2;
    let mousey = h / 2;
    let ploader = new PIXI.Loader();

    function init() {
        ploader.add('fg', 'img/partiseul1.jpg');
        ploader.add('depth', 'img/partirseul2_2.jpg');
        ploader.once('complete', start);
        ploader.load();

        let ratio;

        ploader.resources.fg.data.height = h;
        ploader.resources.fg.data.width = w;
        ploader.resources.depth.data.height = h;
        ploader.resources.depth.data.width = w;

    }

    function start() {
        fg = new PIXI.Sprite(ploader.resources.fg.texture);
        foreground.addChild(fg);

        d = new PIXI.Sprite(ploader.resources.depth.texture);
        f = new PIXI.filters.DisplacementFilter(d, 0);

        fg.filters = [f];

        window.addEventListener('mousemove', e => {
            mousex = e.clientX;
            mousey = e.clientY;
        });

        animate();
    }

    function animate() {
        f.scale.x = (window.innerWidth / 2 - mousex) / 50;
        f.scale.y = (window.innerHeight / 2 - mousey) / 50;
        fg.addChild(d);
        d.renderable = false;

        renderer.render(stage);
        requestAnimationFrame(animate);
    }

    init();
});