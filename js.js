// Prototype inheritance
const university = {
  universityName: "Polytechnic",
  dean: "John Doe",
};

const faculty = Object.create(university);
faculty.facultyName = "Computer Science";
faculty.groups = [];

faculty.enlistStudent = function (studentName) {
  if (this.groups.length === 0) {
    this.groups.push([]);
  }

  const currentGroup = this.groups[this.groups.length - 1];

  if (currentGroup.length < 12) {
    currentGroup.push(studentName);
  } else {
    this.groups.push([studentName]);
  }
};

console.log(faculty.universityName); 
faculty.enlistStudent("Taras");
console.log(faculty.groups);


// Prototype constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.getInfo = function () {
  return `${this.name}`;
}

function Mammal(name, live) {
  Animal.call(this, name);
  this.live = live;
}

Mammal.prototype = Object.create(Animal.prototype);

Mammal.prototype.run = function () {
  return `${this.name}`;
}

function Bird(name, live) {
  Animal.call(this, name);
  this.live = live;
}

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.fly = function () {
  return `${this.name}`;
}

function Dog(name, live, breed) {
  Mammal.call(this, name, live);
  this.breed = breed;
}

Dog.prototype = Object.create(Mammal.prototype);

Dog.prototype.whoIsGoodDog = function () {
  return 'гав-гав';
}

function Penguin(name, live, species) {
  Bird.call(this, name, live);
  this.species = species;
}

Penguin.prototype = Object.create(Bird.prototype);

Penguin.prototype.fly = function () {
  return `не може летіти`;
}

Penguin.prototype.swim = function () {
  return `${this.name}`;
}

