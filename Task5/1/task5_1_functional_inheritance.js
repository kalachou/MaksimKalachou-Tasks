function Animal (name, age, weight, speed, limitDistance, sleepSound) {
    this.name = name || "John Dow";
    this.age = age || 0;
    this.weight = weight || 10;
    this.speed = speed || 30;
    this.isSleeping = true;
    this.position = [0,0];
    this.limitDistance = limitDistance || 1800;
    this.sleepSound = sleepSound || "Bzz-z-z!";


    this.getAge = () => this.age;
    this.getWeight = () => this.weight;
    this.getSpeed = () => this.speed;
    this.getName = () => this.name;

    this.setAge = (x) => this.age = x;
    this.setWeight = (x) => this.weight = x;
    this.setSpeed = (x) => this.speed = x;

    this.run = () => {
        const that = this;
        if (this.isSleeping) {
            console.log(`${this.getName()}:${this.sleepSound}`);
            return;
        }
        if (!this.isSleeping) {
            this.runTimerID = setInterval(() => {
                if (that.position[1] < that.limitDistance) {
                    that.position[1] += that.getSpeed();
                } else {
                clearInterval(that.runTimerID);
                console.log(`${this.getName()}: I can't run anymore! I need some rest...`);
                }
            }, 1000, console.log(`${this.getName()}: I'm running!`));
        }
    }
    
    this.awake = () => this.isSleeping = false;
    this.sleep = () =>  this.isSleeping = true;
    this.rest = (time = (this.limitDistance / this.getSpeed())) => {
        const that = this;
        this.timeOfRest = time;
        this.restTimerID = setInterval( function() {
            that.timeOfRest -= 1;
            that.position[1] -= 100;
            if (that.timeOfRest <= 0 || that.position[1] <= 0) clearInterval(that.restTimerID);
        }, 
        1000, `I have ${that.position[0]*100/that.limitDistance}% power`);
    };
}

function Cat (...args) {
    args[0] = args[0] || "John Cat Dow";
    args[1] = args[1] || 0;
    args[2] = args[2] || 8;
    args[3] = args[3] || 20;
    args[4] = args[4] || 500;
    args[5] = args[5] || "Mow-w-w-w...";

    Animal.apply(this, args);
}

function Frog (...args) {
    args[0] = args[0] || "John Frog Dow";
    args[1] = args[1] || 0;
    args[2] = args[2] || 0.5;
    args[3] = args[3] || 5;
    args[4] = args[4] || 50;
    args[5] = args[5] || "Fro-o-oo-o-og...";

    Animal.apply(this, args);
}

function Snake (...args) {
    args[0] = args[0] || "John Snake Dow";
    args[1] = args[1] || 0;
    args[2] = args[2] || 3;
    args[3] = args[3] || 2;
    args[4] = args[4] || 50;
    args[5] = args[5] || "Ps-s-s-s...";

    Animal.apply(this, args);
}

let a = new Cat();
let b = new Frog();
let c = new Snake();
let d = new Cat("Elder Beloved Cat", 18)

a.awake();
b.awake();
c.awake();
console.log(`S${a.getName()}:${a.position[1]},${b.getName()}:${b.position[1]},${c.getName()}:${c.position[1]},${d.getName()}:${c.position[1]}`);
a.run();
b.run();
c.run();
d.run()
setTimeout(
    ()=>console.log(
        `${a.getName()}:${a.position[1]},${b.getName()}:${b.position[1]},${c.getName()}:${c.position[1]},${d.getName()}:${c.position[1]}`),
         5000);