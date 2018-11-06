'use strict';

class Animal {
    constructor (name, age, weight, speed, limitDistance, sleepSound) {
        this.name = name || "John Doe";
        this.age = age || 0;
        this.weight = weight || 10;
        this.speed = speed || 30;
        this.isSleeping = true;
        this.position = [0,0];
        this.limitDistance = limitDistance || 1800;
        this.sleepSound = sleepSound || "Bzz-z-z!";
    }

    getAge() { 
        return this.age; 
    };

    getWeight() { 
        return this.weight; 
    };

    getSpeed() {return this.speed; };

    getName() { return this.name; };

    setAge(x) { return this.age = x; };

    setWeight(x) {return this.weight = x; };

    setSpeed(x)  {return this.speed = x; };

    run() {
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
        };
    };

    awake() { return this.isSleeping = false; };
    sleep() { return this.isSleeping = true; };
    rest(time = (this.limitDistance / this.getSpeed())) {
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

class Cat extends Animal {
    super(...args) {
        this.name = args[0] || "John Cat Doe";
        this.age = args[1] || 0;
        this.weight = args[2] || 8;
        this.speed = args[3] || 20;
        this.limitDistance = args[4] || 500;
        this.sleepSound = args[5] || "Mow-w-w-w...";
    }
}

class Frog extends Animal {
    super(...args) {
        this.name = args[0] || "John Frog Doe";
        this.age = args[1] || 0;
        this.weight = args[2] || 0.5;
        this.speed = args[3] || 5;
        this.limitDistance = args[4] || 50;
        this.sleepSound = args[5] || "Fro-o-oo-o-og...";
    }
}

class Snake extends Animal {
    super(...args) {
        this.name = args[0] || "John Snake Doe";
        this.age = args[1] || 0;
        this.weight = args[2] || 3;
        this.speed = args[3] || 2;
        this.limitDistance = args[4] || 50;
        this.sleepSound = args[5] || "Ps-s-s-s...";
    }
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