class Drawable { //класс для отображения фруктов и тд
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.offsets = { //скорость движения по x и y
            x: 0,
            y: 0
        }
    }

    createElement() { //создает элемент внутри верстки
        this.element = document.createElement("div");
        this.element.className = "element" + this.constructor.name.toLowerCase();
        // $('.elements').innerHTML = '<div class="element ' = this.constructor.name.toLowerCase() + '"></div>'; //так нельзя создавать, работать не будет
        $('.elements').append(this.element);

        //перемещение с учетом скорости движения
    update() {
        this.x += this.offsets.x;
        this.y += this.offsets.y;
    }
    //метод отрисовки
    draw() {
        this.element.style = `
        left: ${this.x}px;
        top: ${this.y}px;
        width: ${this.w}px;
        height: ${this.h}px;
        `;
    }
}
 //класс за игрова, куда передается игра в родительский конструктор
class Player extends Drawable {
    constructor(game) {
        super(game);
        this.w = 244;
        this.h = 109;
        this.x = window.innerWidth / 2 - this.w / 2; //высота экрана - высота корзины, шир. экнрана - полоаина шир. коризны
        this.y = window.innerHeight / 2 - this.h;
        this.createElement();
    }
}

class Game {
    constructor() {
        //передаём имя из глобальной? конструктор срабатыввет как только вызов
        this.name = name;
        this.elements = []; //все в этом массиве и корзина. и фрукты
        this.players = this.generate(Player);
    }

    generate(className) {
        let element = new className(this);
        this.elements.push(element);
        return element; //ретерн только для игрока
    }

    start(){
        this.loop();
    }
    //сет интервал при подклбчение ко времни теряет точность
    loop(){
        requestAnimationFrame(() => {
            this.updateElements();
            this.setParams(); //метод отвечает за
            this.loop(); //мягкая анимация, замыкается сама в себя
        });
    }

    updateElements() { //для отрисовки
        this.elements.forEach((el) => {
            el.update();
            el.draw();
        })
    }

    setParams() {
        let params = ['name'];
        let values = [this.name];
        params.forEach((el, index) => {
            $(`#${el}`).innerHTML = values[index];
        })
    }
}