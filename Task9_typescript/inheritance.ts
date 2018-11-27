class Animal {
  private name: string;
  private age: number;
  private weight: number;
  private speed: number;
  private isSleeping: boolean;
  private limitDistance: number;
  private sleepSound: string;
  private runTimerID: number;
  private timeOfRest: number;
  private restTimerID: number;
  private fullRestTime: number;

  public position: [number, number];

  constructor(name: string = 'John Doe',
    age: number = 0,
    weight: number = 10,
    speed: number = 30,
    limitDistance: number = 1800,
    sleepSound: string = 'Bzz-z-z!') {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.speed = speed;
    this.isSleeping = true;
    this.position = [0, 0];
    this.limitDistance = limitDistance;
    this.sleepSound = sleepSound;
    this.fullRestTime = this.limitDistance / this.speed;
  }

  public getAge() {
    return this.age;
  }

  public getWeight() {
    return this.weight;
  }

  public getSpeed() {
    return this.speed;
  }

  public getName() {
    return this.name;
  }

  public setName(name) {
    return this.name = name;
  }

  public setAge(x) {
    return this.age = x;
  }

  public setWeight(x) {
    return this.weight = x;
  }

  public setSpeed(x) {
    return this.speed = x;
  }

  public setLimitDistance(limit: number) {
    return this.limitDistance = limit;
  }

  public setSleepSound(sound: string) {
    return this.sleepSound = sound;
  }

  public run() {
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

  public awake() {
    return this.isSleeping = false;
  }

  public sleep() {
    return this.isSleeping = true;
  }

  public rest(time = this.fullRestTime) {
    const that = this;
    this.timeOfRest = time;
    this.restTimerID = setInterval(() => {
      that.timeOfRest -= 1;
      that.position[1] -= 100;
      if (that.timeOfRest <= 0 || that.position[1] <= 0) clearInterval(that.restTimerID);
    },
      1000, `I have ${that.position[0] * 100 / that.limitDistance}% power`);
  }
}

class Cat extends Animal {
  constructor(name: string = 'John Cat Doe',
    age: number = 0,
    weight: number = 8,
    speed: number = 20,
    limitDistance: number = 500,
    sleepSound: string = 'Mow-w-w-w...') {
    super(name, age, weight, speed, limitDistance, sleepSound);
  }
  public climb(tree: string) {
    console.log(`I'm climbing ${tree}!`);
  }
}

class Frog extends Animal {
  constructor(name: string = 'John Frog Doe',
    age: number = 0,
    weight: number = 0.5,
    speed: number = 5,
    limitDistance: number = 50,
    sleepSound: string = 'Fro-o-oo-o-og...') {
    super(name, age, weight, speed, limitDistance, sleepSound);
  }
}

class Snake extends Animal {
  constructor(name: string = 'John Snake Doe',
    age: number = 0,
    weight: number = 3,
    speed: number = 2,
    limitDistance: number = 50,
    sleepSound: string = 'Ps-s-s-s...') {
    super(name, age, weight, speed, limitDistance, sleepSound);
  }
}
