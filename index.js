class Inhabitant {
   constructor(creature, name, gender, legs, friends, say) {
      this.creature = creature
      this.name = name
      this.gender = gender
      this.legs = legs
      this.friends = friends
      this.say = say
   }
}

class Animal extends Inhabitant{
   constructor(creature, name, gender, friends, say) {
      super(creature, name, gender, 4, friends, say);
   }
   inhabitantSpeech() {
   return `Sup, i am a ${this.creature}, my name is ${this.name}, i am cool ${this.gender} with all of my ${this.legs} legs and my friends ${this.friends}, I want${this.say}` 
   }
}

class Cat extends Animal{
   constructor(name, gender, friends) {
      super("Cat", name, gender, friends, " to say Where is my money, Gregory?!"); 
   }
}

class Dog extends Animal{
   constructor(name, gender, friends) {
      super("Dog", name, gender, friends, " to say that you are breathtaking!");
   }
}

class Human extends Inhabitant{
   constructor(name, gender, friends, say) {
      super("Human", name, gender, 2, friends, say);
      this.hands = 2
   }
   inhabitantSpeech() {
   return `Hi, i am a ${this.creature}, my name is ${this.name}, i am nice ${this.gender}, with my ${this.hands} hands, ${this.legs} legs and my friends ${this.friends} I want${this.say}` 
   }
}
   
class Man extends Human{
   constructor(name, friends) {
      super(name, "male", friends, " to Stage 1!"); 
   }
}

class Woman extends Human{
   constructor(name, friends) {
      super(name, "female", friends, ' to learn React');
   }
}

class CatWoman extends Woman{
    constructor(name, friends) {
      super(name, friends);
      this.say = Gangster.say
      this.creature = "Cat-Woman"
   }
}

let Gangster = new Cat("Gangster", "male", "Yohanna and Vanessa");
let Gregory = new Man("Gregory", "Vanessa and Bandit");
let Yohanna = new Woman("Yohanna", "Gangster and Gregory");
let Bandit = new Dog('Bandit', 'male', "Gregory and Gangster");
let Vanessa = new CatWoman("Vanessa", "Gangster and Yohanna")

const members = [Gangster, Bandit, Gregory, Yohanna, Vanessa]

members.map(member => print(member.inhabitantSpeech()))

/*
const man = {
   creature: 'human',
   name: "Gregory",
   gender: 'male',
   hands: 2,
   legs: 2,
   say: "Hello, woman!",
   friends: ["Bandit", "Gangster"]
};
const woman = {
   creature: 'human',
   name: "Yohanna",
   gender: 'female',
   hands: 2,
   legs: 2,
   say: "Hello, man!",
   friends:"Gangster"
};
const dog = {
   creature: 'dog',
   name: "Bandit",
   gender: 'male',
   hands: 0,
   legs: 4,
   say: "Bark!",
   friends:  ["Gregory", "Yohanna"]
};
const cat = {
   creature: 'cat',
   name: "Gangster",
   gender: 'male',
   hands: 0,
   legs: 4,
   say: "Where is my money, Gregory?!",
   friends:  ["Gregory", "Vanessa"]
};
const catWoman = Object.create(cat);
catWoman.creature = "cat-woman";
catWoman.name = "Vanessa";
catWoman.gender = 'female';
catWoman.legs = 2;
catWoman.hands = 2;
catWoman.friends =  ["Yohanna", "Gangster"];

const keys = {
   creature: "I am ",
   name: "My name is ",
   gender: "I am a pretty ",
   hands: "I have a ",
   legs: "hands and ",
   friends: "legs I like to talk with ",
   say: "I would like to say "
}

const members = [man, woman, cat, dog, catWoman];
const memberProps = ['creature', 'name', 'gender', 'hands', 'legs', 'friends', 'say'];
members.forEach(member => 
   print((memberProps 
      .map(key => keys[key] + member[key]))
      .join(" ")
   )
);
*/