// Create arr method

const obj = {
  from: 1,
  to: 10,
  createArr: function() {
    const arr = [];
    for (let i = this.from; i <= this.to; i++) {
      arr.push(i);
    }
    this.arr = arr;
  }
};

obj.createArr();

console.log(obj.arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Solution 2: Використовуючи bind
const obj2 = {
  from: 1,
  to: 10,
};

const createArrBind = function() {
  const arr = [];
  for (let i = this.from; i <= this.to; i++) {
    arr.push(i);
  }
  this.arr = arr;
};

const boundCreateArr = createArrBind.bind(obj2);
boundCreateArr();
console.log(obj2.arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Solution 3: Використовуючи call або apply
const objnext = {
  from: 1,
  to: 10,
};

const createArrnew = function() {
  const arr = [];
  for (let i = this.from; i <= this.to; i++) {
    arr.push(i);
  }
  this.arr = arr;
};

createArrnew.call(objnext);
console.log(objnext.arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Calculator
const calculator = {
    result: 0,
    sum: function (num) {
        this.result += num;
        return this;
    },
    sub: function (num) {
        this.result -= num;
        return this;
    },
    mul: function (num) {
        this.result *= num;
        return this;
    },
    div: function (num) {
        if (num === 0) {
            console.error;
            return this;
        }
        this.result /= num;
        return this;
    },
};
const result = calculator.sum(2).sum(2).mul(4).result;
console.log(result);

// CAR 
function Car(model, color, age, speed, gasTank, started) {
  this.model = model;
  this.color = color;
  this.age = age;
  this.speed = speed;
  this.gasTank = gasTank;
  this.started = started;

  this.startEngine = function() {
    if (this.checkGas() && !this.started) {
      this.started = true;
    }
    return this;
  };

  this.drive = function() {
    if (this.started && this.gasTank > 0) {
      this.speed = Math.min(this.speed + 30, 200);
      this.gasTank -= 5;
    }
    return this;
  };

  this.stop = function() {
    this.started = false;
    this.speed = 0;
    return this;
  };

  this.speedUp = function(arg) {
    if (this.started) {
      this.speed = Math.min(this.speed + arg, 200);
      this.gasTank -= 5;
      if (this.gasTank <= 0) {
        this.stop();
      }
    }
    return this;
  };

  this.slowDown = function(arg) {
    if (this.started) {
      this.speed = Math.max(this.speed - arg, 0);
      this.gasTank -= 5;
      if (this.gasTank <= 0) {
        this.stop();
      }
    }
    return this;
  };

  this.addGas = function(arg) {
    this.gasTank = Math.min(this.gasTank + arg, 20);
    return this;
  };

  this.checkGas = function() {
    return this.gasTank > 0;
  };
}

const myCar = new Car("Toyota", "Blue", 2, 0, 10, false);

myCar.startEngine().addGas(15).drive().speedUp(40).slowDown(10).stop();

console.log(myCar);
