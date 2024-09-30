// Initialize canvas settings
var canvas = {
    element: document.getElementById('canvas'),
    width: window.innerWidth,
    height: window.innerHeight,
    initialize: function () {
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        
        document.body.appendChild(this.element);
    }
};

// NoSignal object to handle the movement of "No Signal" text
var NoSignal = {
    create: function (dx, dy) {
        var newSignal = Object.create(this);
        newSignal.dx = dx;
        newSignal.dy = dy;
        newSignal.width = 200;  // Adjust based on text size
        newSignal.height = 80;  // Adjust based on text size
        newSignal.element = document.createElement('div');
        newSignal.element.textContent = 'NO SIGNAL';
        newSignal.element.className += ' no-signal';
        canvas.element.appendChild(newSignal.element);
        return newSignal;
    },
    moveTo: function (x, y) {
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    },
    changeDirectionIfNecessary: function (x, y) {
        if (x < 0 || x > canvas.width - this.width) {
            this.dx = -this.dx;
        }
        if (y < 0 || y > canvas.height - this.height) {
            this.dy = -this.dy;
        }
    },
    draw: function (x, y) {
        this.moveTo(x, y);
        var signal = this;
        setTimeout(function () {
            signal.changeDirectionIfNecessary(x, y);
            signal.draw(x + signal.dx, y + signal.dy);
        }, 1000 / 60);  // 60 frames per second
    }
};

// Initialize the canvas
canvas.initialize();

// Create and start bouncing "No Signal" texts
var signal1 = NoSignal.create(3, 3);
var signal2 = NoSignal.create(5, 2);
var signal3 = NoSignal.create(2, 4);

signal1.draw(70, 0);
signal2.draw(150, 200);
signal3.draw(300, 330);
