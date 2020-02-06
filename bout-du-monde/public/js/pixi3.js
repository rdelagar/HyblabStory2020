$(document).ready(function () {

    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new PIXI.Renderer({width: w, height: h});
    const wrap = document.querySelector('section.alone');
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
        ploader.add('fg', 'img/5.jpg');
        ploader.add('depth', 'img/5-prof.jpg');
        ploader.once('complete', start);
        ploader.load();

        ploader.resources.fg.data.width = w;
        ploader.resources.depth.data.width = w;
        ploader.resources.fg.data.height = h;
        ploader.resources.depth.data.height = h;

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